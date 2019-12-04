class WebTestStyleAttribute extends React.Component {

  constructor(props){
    super(props);
    var attribute = props.initialAttribute ? props.initialAttribute : "";
    var value = props.initialValue ? props.initialValue : "";
    this.state = {
      attribute: attribute,
      value: value
    };
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
      <div>
        <label>
          Attribute
          <input type="text" name="attribute" value={this.state.attribute} onChange={this.handleAttributeChange} />
        </label>
        <label>
          Value
          <input type="text" name="value" value={this.state.value} onChange={this.handleValueChange} />
        </label>
      </div>
    );
  
  }

}

// export default WebTestStyleAttribute;