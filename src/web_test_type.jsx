//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestType extends React.Component {

    constructor(props) {
        super(props);
        var selector = props.initialSelector ? props.initialSelector : ""
        var value = props.initialValue ? props.initialValue : ""
        this.state = {
            selector: selector,
            value: value
        };
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
                <label>
                    Selector
                    <input type="text" onChange={this.handleChangeSelector} name="selector" value={this.state.selector}/>
                </label>
                <label>
                    Text
                    <input type="text" onChange={this.handleChangeValue} name="value" value={this.state.value}/>
                </label>
            </div>
        );
    }
}

////export default WebTestType;