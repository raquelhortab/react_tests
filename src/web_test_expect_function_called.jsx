//import React, { Component } from "react";
//import ReactDOM from "react-dom";

class WebTestExpectFunctionCalled extends React.Component {

    constructor(props) {
        super(props);
        var functionName = props.initialFunctionName ? props.initialFunctionName : "";
        this.state = {
            functionName: functionName
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({selector: event.target.functionName}, handlerCallback);
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