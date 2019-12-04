var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebTestExpectFunctionCalled = function (_React$Component) {
    _inherits(WebTestExpectFunctionCalled, _React$Component);

    function WebTestExpectFunctionCalled(props) {
        _classCallCheck(this, WebTestExpectFunctionCalled);

        var _this = _possibleConstructorReturn(this, (WebTestExpectFunctionCalled.__proto__ || Object.getPrototypeOf(WebTestExpectFunctionCalled)).call(this, props));

        var functionName = props.initialFunctionName ? props.initialFunctionName : "";
        _this.state = {
            functionName: functionName
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(WebTestExpectFunctionCalled, [{
        key: "handleChange",
        value: function handleChange(event) {
            var _this2 = this;

            var handlerCallback = function handlerCallback() {
                _this2.props.handler(_this2.props.index, _this2.state);
            };
            this.setState({ selector: event.target.functionName }, handlerCallback);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "label",
                null,
                "Function name",
                React.createElement("input", { type: "text", onChange: this.handleChange, value: this.state.functionName })
            );
        }
    }]);

    return WebTestExpectFunctionCalled;
}(React.Component);

// export default WebTestExpectFunctionCalled;