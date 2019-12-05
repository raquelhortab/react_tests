//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestFunctionExists extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            functionName: (props.initialFunctionName ? props.initialFunctionName : "")
        };
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
            <label>
                Function name
                <input type="text" onChange={this.handleChange} value={this.state.functionName}/>
            </label>
        );
    }

}

//export default WebTestFunctionExists;