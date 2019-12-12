
//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestClick extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            this.state = {
                selector: (props.initialSelector ? props.initialSelector : "")
            };
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({selector: event.target.value}, handlerCallback);
    };

    render() {
        return(
            <div className="form-item">
                <label>Selector</label>
                <input type="text" onChange={this.handleChange} value={this.state.selector}/>
            </div>
        );
    }

}

//export default WebTestClick;

class WebTestExpectAlert extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            var message = props.initialMessage ? props.initialMessage : "";
            this.state = {
                message: message
            };
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({message: event.target.value}, handlerCallback);
    };

    render(){
        return(
            <div className="form-item">
                <label>Message</label>
                <input type="text" onChange={this.handleChange} value={this.state.message}/>
            </div>
        );
    }

}

//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestExpectFunctionCalled extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            var functionName = props.initialFunctionName ? props.initialFunctionName : "";
            this.state = {
                functionName: functionName
            };
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({functionName: event.target.value}, handlerCallback);
    };

    render(){
        return(
            <div className="form-item">
            <label>Function name</label>
                <input type="text" onChange={this.handleChange} value={this.state.functionName}/>
            </div>
        );
    }

}

//export default WebTestExpectFunctionCalled;

class WebTestExpectPrompt extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            var message = props.initialMessage ? props.initialMessage : "";
            var input = props.initialInput ? props.initialInput : "";
            this.state = {
                message: message,
                input: input
            };
        }
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleMessageChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({message: event.target.value}, handlerCallback);
    };

    handleInputChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({input: event.target.value}, handlerCallback);
    };

    render(){
        return(
            <div>
                <div className="form-item">
                    <label>Message</label>
                    <input type="text" onChange={this.handleMessageChange} value={this.state.message}/>
                </div>
                <div className="form-item">
                    <label>Input</label>
                    <input type="text" onChange={this.handleInputChange} value={this.state.input}/>
                </div>
            </div>
        );
    }

}

//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestFunctionExists extends React.Component{

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            this.state = {
                functionName: (props.initialFunctionName ? props.initialFunctionName : "")
            };
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({functionName: event.target.value}, handlerCallback);
    };

    render(){
        return(
            <div className="form-item">
                <label>Function name </label>
                <input type="text" onChange={this.handleChange} value={this.state.functionName}/>
            </div>
        );
    }

}

//export default WebTestFunctionExists;

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

//import React, { Component } from "react";
//import ReactDOM from "react-dom";
// import WebTest from "./web_test.jsx";

class WebTestList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            testList: (props.initialTestList ? props.initialTestList : []),
            lastKey: ((props.initialTestList && props.initialTestList.length>0) ? props.initialTestList.slice(-1)[0].key : 0)
        }
        this.handleAddTest = this.handleAddTest.bind(this);
        this.handleChangeTest = this.handleChangeTest.bind(this);
        this.handleRemoveTest = this.handleRemoveTest.bind(this);
    }

    handleAddTest(){
        this.setState((state, props) => {
            var newList = [...state.testList];
            newList.push({value: undefined, key: state.lastKey + 1});
            return {
                testList: newList,
                lastKey: state.lastKey + 1
            }
        }, this.updateObject);
    }

    handleRemoveTest(key){
        var callback = function () {
            this.updateObject();
        };
        this.setState((state, props) => {
            var newList = state.testList.filter((val, i) => val.key != key);
            return {
                testList: newList
            }
        }, this.updateObject);
    }

    handleChangeTest(index, newElement){
        this.setState((state, props) => {
            var newList = [...state.testList];
            newList[index].value = newElement;
            return {
                testList: newList
            }
        }, this.updateObject);
    }

    updateObject(){
        window.web_tests = this.state.testList;
        if(window.updateWebTests != undefined) window.updateWebTests();
    }

    render() {
        var items = this.state.testList.map((item,index) => {
            return(
                <li key={item.key}>
                    <fieldset>
                    <legend>Test {index+1}</legend><br/>
                    <WebTest index={index} key={item.key} initialState={item.value} handler={this.handleChangeTest.bind(this)}/>
                    <a onClick={this.handleRemoveTest.bind(this, item.key)}>Remove test</a>
                    </fieldset>
                </li>
            );
        });

        return(
            <div>
                <ul style={{ listStyleType: "none" }}>
                {items}
                </ul>
                <a onClick={this.handleAddTest}>Add test</a>
            </div>
        );
    }

}

//export default WebTestList;

//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestSelectorExists extends React.Component{

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            this.state = {
                selector: (props.initialSelector ? props.initialSelector : "")
            };
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({selector: event.target.value}, handlerCallback);
    };

    render() {
        return(
            <div className="form-item">
                <label>Selector </label>
                <input type="text" onChange={this.handleChange} value={this.state.selector}/>

            </div>
        );
    }

}

//export default WebTestSelectorExists;

//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestSelector extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            this.state = {
                kind:  (props.initialKind ? props.initialKind : "")
            };
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event){
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state.kind)
        };

        if(event.target.value === ""){
            this.setState({kind: undefined}, handlerCallback);
            return;
        }
        this.setState({kind: event.target.value}, handlerCallback);
    }

    render() {
        return (
            <div className="form-item">
                <label>Test kind</label>
                <select value={this.state.kind} onChange={this.handleOnChange}>
                    <option name="test_kind" value="">Select...</option>
                    <option name="test_kind" value="selector_exists">Selector exists</option>
                    <option name="test_kind" value="function_exists">Function exists</option>
                    <option name="test_kind" value="selector_style">Selector style</option>
                    <option name="test_kind" value="click">Click on element</option>
                    <option name="test_kind" value="type">Type in element</option>
                    <option name="test_kind" value="expect_function_called">Expect function called</option>
                    <option name="test_kind" value="expect_alert">Expect alert</option>
                    <option name="test_kind" value="expect_prompt">Expect prompt</option>
                </select>
            </div>
        );
    }

}

//export default WebTestSelector;

//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestStyleAttribute extends React.Component {

  constructor(props){
    super(props);
    if(props.initialState){
      this.state = props.initialState;
    }
    else{
      var attribute = props.initialAttribute ? props.initialAttribute : "";
      var value = props.initialValue ? props.initialValue : "";
      this.state = {
        attribute: attribute,
        value: value
      };
    }
    this.handleAttributeChange = this.handleAttributeChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  };

  handleAttributeChange(event) {
    this.setState({attribute: event.target.value}, function () {
      this.props.handler(this.props.index, this.state)
    });
  };

  handleValueChange(event) {
    this.setState({value: event.target.value}, function () {
      this.props.handler(this.props.index, this.state)
    });
  };

  render(){

    return(
      <div style={{border:"1px solid lightgray", padding:"5px"}}>
        <div className="form-item">
            <label>Attribute</label>
          <input type="text" name="attribute" value={this.state.attribute} onChange={this.handleAttributeChange} />

        </div>
        <div className="form-item">
            <label>Value</label>
          <input type="text" name="value" value={this.state.value} onChange={this.handleValueChange} />

        </div>
      </div>
    );
  
  }

}

//export default WebTestStyleAttribute;

//import React, { Component } from "react";
//import ReactDOM from "react-dom";
// import WebTestStyleAttribute from "./web_test_style_attribute.jsx";

class WebTestStyleAttributeList extends React.Component{

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            this.state = {
                selector: (props.initialSelector ? props.initialSelector : ""),
                listItems: (props.initialListItems ? props.initialListItems : [])
            }
        }
        this.handleAddItem = this.handleAddItem.bind(this);
        this.updateObject = this.updateObject.bind(this);
        this.handleSelectorChange = this.handleSelectorChange.bind(this);
    }

    // item shoud be an object with the attributes: attribute and value
    handleAddItem(){
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState((state, props) => {
            var newList = [...state.listItems];
            newList.push({attribute: "", value: ""});
            return {
                listItems: newList
            }
        }, handlerCallback);
    }

    handleSelectorChange(event){
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({selector: event.target.value}, handlerCallback);
    }

    handleChildChange(index, newElement){
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState((state, props) => {
            var newList = [...state.listItems];
            newList[index] = newElement;
            return {
                listItems: newList
            }
        }, handlerCallback);
    }

    updateObject(){
        window.webStyleListObject = this.state;
    }

    render() {
        var items = this.state.listItems.map((item, index)=>
            <li key={index}>
                <WebTestStyleAttribute index={index} handler={this.handleChildChange.bind(this)} initialAttribute={item.attribute} initialValue={item.value}/>
            </li>
        )
        return(
            <div >
                <div className="form-item">
                    <label>Selector</label>
                    <input type="text" onChange={this.handleSelectorChange} value={this.state.selector} />

                </div>
                <ul>
                    {items}
                </ul>
                <div style={{width:"10em", textAlign: "right"}}><a onClick={this.handleAddItem}>Add item</a></div>
            </div>
        );
    }
}

//export default WebTestStyleAttributeList;

//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestType extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            var selector = props.initialSelector ? props.initialSelector : ""
            var value = props.initialValue ? props.initialValue : ""
            this.state = {
                selector: selector,
                value: value
            };
        }
        this.handleChangeSelector = this.handleChangeSelector.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleChangeSelector(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({selector: event.target.value}, handlerCallback);
    };

    handleChangeValue(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({value: event.target.value}, handlerCallback);
    };

    render() {
        return(
            <div>
                <div className="form-item">
                    <label>Selector</label>
                    <input type="text" onChange={this.handleChangeSelector} name="selector" value={this.state.selector}/>
                </div>
                <div className="form-item">
                <label>Text</label>
                    <input type="text" onChange={this.handleChangeValue} name="value" value={this.state.value}/>
                </div>
            </div>
        );
    }
}

////export default WebTestType;
