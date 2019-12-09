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
            console.log("new")
            console.log(newList)
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
        window.web_test = this.state.testList;
        console.log(window.web_test);
    }

    render() {
        var items = this.state.testList.map((item,index) => {
            return(
                <li key={item.key}>
                    <fieldset>
                    <legend>Test {index+1}</legend><br/>
                    <WebTest index={index} key={item.key} initialState={item.value}/>
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