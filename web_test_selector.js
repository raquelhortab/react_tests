var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebTestSelector = function (_React$Component) {
    _inherits(WebTestSelector, _React$Component);

    function WebTestSelector(props) {
        _classCallCheck(this, WebTestSelector);

        var _this = _possibleConstructorReturn(this, (WebTestSelector.__proto__ || Object.getPrototypeOf(WebTestSelector)).call(this, props));

        _this.state = {
            kind: props.initialKind ? props.initialKind : ""
        };
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }

    _createClass(WebTestSelector, [{
        key: "handleOnChange",
        value: function handleOnChange(event) {
            var _this2 = this;

            var handlerCallback = function handlerCallback() {
                _this2.props.handler(_this2.props.index, _this2.state.kind);
            };

            if (event.target.value === "") {
                this.setState({ kind: undefined }, handlerCallback);
                return;
            }
            this.setState({ kind: event.target.value }, handlerCallback);
        }
    }, {
        key: "render",
        value: function render() {
            console.log("render selector");
            console.log(this.state.kind);
            return React.createElement(
                "select",
                { value: this.state.kind, onChange: this.handleOnChange },
                React.createElement(
                    "option",
                    { name: "test_kind", value: "" },
                    "Select..."
                ),
                React.createElement(
                    "option",
                    { name: "test_kind", value: "selector_exists" },
                    "Selector exists"
                ),
                React.createElement(
                    "option",
                    { name: "test_kind", value: "function_exists" },
                    "Function exists"
                ),
                React.createElement(
                    "option",
                    { name: "test_kind", value: "selector_style" },
                    "Selector style"
                ),
                React.createElement(
                    "option",
                    { name: "test_kind", value: "click" },
                    "Click on element"
                ),
                React.createElement(
                    "option",
                    { name: "test_kind", value: "type" },
                    "Type in element"
                ),
                React.createElement(
                    "option",
                    { name: "test_kind", value: "expect_function_called" },
                    "Expect function called"
                )
            );
        }
    }]);

    return WebTestSelector;
}(React.Component);

// export default WebTestSelector;