// import WebTestStyleAttributeList from "./web_test_style_attribute_list";
// import WebTestClick from "./web_test_click";
// import WebTestType from "./web_test_type";
// import WebTestExpectFunctionCalled from "./web_test_expect_function_called";
// import WebTestFunctionExists from "./web_test_function_exists";
// import WebTestSelectorExists from "./web_test_selector_exists";
// import WebTestSelector from "./web_test_selector";

class WebTest extends React.Component {

    constructor(props) {
        console.log(props.initialStepList);
        console.log(props.initialStepList.slice(-1)[0].key);
        super(props);
        this.state = {
            stepList: (props.initialStepList ? props.initialStepList : []),
            lastKey: (props.initialStepList && props.initialStepList.slice(-1) ? props.initialStepList.slice(-1)[0].key : 0)
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleAddStep = this.handleAddStep.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
    }

    handleOnChange(event){
        this.setState({type: event.target.value});
    }

    // item shoud be an object with the attributes: attribute and value
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
        this.setState((state, props) => {
            var newList = [...state.stepList];
            newList[index].value = newElement;
            this.updateObject();
            return {
                stepList: newList
            }
        });
    }

    handleKindChange(index, newKind){
        this.setState((state, props) => {
            var newList = [...state.stepList];
            newList[index].kind = newKind;
            newList[index].value = undefined;
            this.updateObject();
            return {
                stepList: newList
            }
        });
    }

    handleRemoveStep(key){
        this.setState((state, props) => {
            var newList = state.stepList.filter((val, i) => val.key != key);
            return {
                stepList: newList
            }
        }, this.forceUpdate);
    }

    updateObject(){
        window.web_test = this.state;
        console.log(window.web_test);
    }

    getComponent(kind){
        var components = {
            "selector_style": WebTestStyleAttributeList,
            "function_exists": WebTestFunctionExists,
            "selector_exists": WebTestSelectorExists,
            "click": WebTestClick,
            "type": WebTestType,
            "expect_function_called": WebTestExpectFunctionCalled
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

// export default WebTest;