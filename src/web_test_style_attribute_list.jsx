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