//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestSelectorExists extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selector: (props.initialSelector ? props.initialSelector : "")
        };
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