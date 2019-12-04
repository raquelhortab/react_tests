var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebTestStep = function (_React$Component) {
    _inherits(WebTestStep, _React$Component);

    function WebTestStep(props) {
        _classCallCheck(this, WebTestStep);

        var _this = _possibleConstructorReturn(this, (WebTestStep.__proto__ || Object.getPrototypeOf(WebTestStep)).call(this, props));

        _this.state = {
            type: ""
        };
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }

    _createClass(WebTestStep, [{
        key: "handleOnChange",
        value: function handleOnChange(event) {
            this.setState({ type: event.target.value });
        }
    }, {
        key: "render",
        value: function render() {

            var details = void 0;

            switch (this.state.type) {
                case "selector_present":
                    details = React.createElement("input", { type: "text", name: "selector" });
                    break;
                case "selector_style":
                    details = React.createElement(WebTestStyleAttributeList, null);
                    break;
                case "function_present":

                    break;
                case "click_selector":

                    break;
                case "type_selector":

                    break;
                case "expect_event":

                    break;
            }

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "select",
                    { onChange: handleOnChange },
                    React.createElement(
                        "option",
                        { value: "selector_present" },
                        "Selector present"
                    ),
                    React.createElement(
                        "option",
                        { value: "selector_style" },
                        "Selector style"
                    ),
                    React.createElement(
                        "option",
                        { value: "function_present" },
                        "Function present"
                    ),
                    React.createElement(
                        "option",
                        { value: "click_selector" },
                        "Click"
                    ),
                    React.createElement(
                        "option",
                        { value: "type_selector" },
                        "Type"
                    ),
                    React.createElement(
                        "option",
                        { value: "expect_event" },
                        "Expect event"
                    )
                ),
                details
            );
        }
    }]);

    return WebTestStep;
}(React.Component);