class WebTestExpectPrompt extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            var message = props.initialMessage ? props.initialMessage : "";
            var input = props.initialInput ? props.initialInput : "";
            this.state = {
                message: message,
                input: input
            };
        }
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleMessageChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({message: event.target.value}, handlerCallback);
    };

    handleInputChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({input: event.target.value}, handlerCallback);
    };

    render(){
        return(
            <div>
                <div className="form-item">
                    <label>Message</label>
                    <input type="text" onChange={this.handleMessageChange} value={this.state.message}/>
                </div>
                <div className="form-item">
                    <label>Input</label>
                    <input type="text" onChange={this.handleInputChange} value={this.state.input}/>
                </div>
            </div>
        );
    }

}