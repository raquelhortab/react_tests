//import React, { Component } from "react";
// import WebTestStyleAttributeList from "./web_test_style_attribute_list.jsx"
// import WebTestFunctionExists from "./web_test_function_exists.jsx"
// import WebTestSelectorExists from "./web_test_selector_exists.jsx"
// import WebTestClick from "./web_test_click.jsx"
// import WebTestType from "./web_test_type.jsx"
// import WebTestExpectFunctionCalled from "./web_test_expect_function_called.jsx"
// import WebTestSelector from "./web_test_selector.jsx"


class WebTest extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            this.state = {
                stepList: (props.initialStepList ? props.initialStepList : []),
                lastKey: (props.initialStepList && props.initialStepList.length>0 ? props.initialStepList.slice(-1)[0].key : 0)
            };
        }

        this.handleAddStep = this.handleAddStep.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.handleRemoveStep = this.handleRemoveStep.bind(this);
        this.handleKindChange = this.handleKindChange.bind(this);
    }

    handleAddStep(){
        this.setState((state, props) => {
            var newList = [...state.stepList];
            newList.push({kind: undefined, value: undefined, key: state.lastKey + 1});
            return {
                stepList: newList,
                lastKey: state.lastKey + 1
            }
        });
    }

    handleStepChange(index, newElement){
        var callback = function () {
            this.props.handler(this.props.index, this.state);
        };
        this.setState((state, props) => {
            var newList = [...state.stepList];
            newList[index].value = newElement;
            return {
                stepList: newList
            }
        }, callback);
    }

    handleKindChange(index, newKind){
        var callback = function () {
            this.props.handler(this.props.index, this.state);
        };
        this.setState((state, props) => {
            var newList = [...state.stepList];
            newList[index].kind = newKind;
            newList[index].value = undefined;
            return {
                stepList: newList
            }
        },callback);
    }

    handleRemoveStep(key){
        var callback = function () {
            this.props.handler(this.props.index, this.state);
        };
        this.setState((state, props) => {
            var newList = state.stepList.filter((val, i) => val.key != key);
            return {
                stepList: newList
            }
        }, callback);
    }

    getComponent(kind){
        var components = {
            "selector_style": WebTestStyleAttributeList,
            "function_exists": WebTestFunctionExists,
            "selector_exists": WebTestSelectorExists,
            "click": WebTestClick,
            "type": WebTestType,
            "expect_function_called": WebTestExpectFunctionCalled,
            "expect_alert": WebTestExpectAlert,
            "expect_prompt": WebTestExpectPrompt
        };
        if(kind !== undefined && kind in components) {
            return(components[kind])
        }
        else {
            return(undefined)
        }
    }

    render() {
        var items = this.state.stepList.map((item, index)=> {
            var element;
            var ElementComponent = this.getComponent(item.kind);
            if(ElementComponent !== undefined){
                element = <ElementComponent index={index} handler={this.handleStepChange.bind(this)} initialState={item.value}/>;
            }
            else{
                element = ""
            }
            var selector =  <WebTestSelector initialKind={item.kind} index={index} handler={this.handleKindChange.bind(this)}/>;
            var remove = <a onClick={this.handleRemoveStep.bind(this, item.key)}>Remove step</a>
            return(
                <li key={item.key}>
                    <div>
                        <span>Step {index+1}</span><br/>
                        {selector}
                        {element}
                        {remove}
                    </div>
                </li>);
        });

        return(
            <div>
                <ul>
                    {items}
                </ul>
                <a onClick={this.handleAddStep}>Add step</a>
            </div>
        );
    }
}

//export default WebTest;