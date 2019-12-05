//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            kind:  (props.initialKind ? props.initialKind : "")
        };
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
        console.log("render selector");
        console.log(this.state.kind);
        return (
            <select value={this.state.kind} onChange={this.handleOnChange}>
                <option name="test_kind" value="">Select...</option>
                <option name="test_kind" value="selector_exists">Selector exists</option>
                <option name="test_kind" value="function_exists">Function exists</option>
                <option name="test_kind" value="selector_style">Selector style</option>
                <option name="test_kind" value="click">Click on element</option>
                <option name="test_kind" value="type">Type in element</option>
                <option name="test_kind" value="expect_function_called">Expect function called</option>
            </select>
        );
    }

}

//export default WebTestSelector;