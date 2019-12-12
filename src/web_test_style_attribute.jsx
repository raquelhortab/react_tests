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