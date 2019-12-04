
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
            newList.push({attribute: "other", value: "nice"});
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
                <label>
                    Selector
                    <input type="text" onChange={this.handleSelectorChange} value={this.state.selector} />
                </label>
                <ul>
                    {items}
                </ul>
                <a onClick={this.handleAddItem}>Add item</a>
            </div>
        );
    }
}

// export default WebTestStyleAttributeList;