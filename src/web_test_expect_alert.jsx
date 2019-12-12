class WebTestExpectAlert extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialState){
            this.state = props.initialState;
        }
        else{
            var message = props.initialMessage ? props.initialMessage : "";
            this.state = {
                message: message
            };
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var handlerCallback = () => {
            this.props.handler(this.props.index, this.state)
        };
        this.setState({message: event.target.value}, handlerCallback);
    };

    render(){
        return(
            <div className="form-item">
                <label>Message</label>
                <input type="text" onChange={this.handleChange} value={this.state.message}/>
            </div>
        );
    }

}