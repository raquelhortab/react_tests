var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import WebTestStyleAttributeList from "./web_test_style_attribute_list";
// import WebTestClick from "./web_test_click";
// import WebTestType from "./web_test_type";
// import WebTestExpectFunctionCalled from "./web_test_expect_function_called";
// import WebTestFunctionExists from "./web_test_function_exists";
// import WebTestSelectorExists from "./web_test_selector_exists";
// import WebTestSelector from "./web_test_selector";

var WebTest = function (_React$Component) {
    _inherits(WebTest, _React$Component);

    function WebTest(props) {
        _classCallCheck(this, WebTest);

        console.log(props.initialStepList);
        console.log(props.initialStepList.slice(-1)[0].key);

        var _this = _possibleConstructorReturn(this, (WebTest.__proto__ || Object.getPrototypeOf(WebTest)).call(this, props));

        _this.state = {
            stepList: props.initialStepList ? props.initialStepList : [],
            lastKey: props.initialStepList && props.initialStepList.slice(-1) ? props.initialStepList.slice(-1)[0].key : 0
        };
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.handleAddStep = _this.handleAddStep.bind(_this);
        _this.handleStepChange = _this.handleStepChange.bind(_this);
        return _this;
    }

    _createClass(WebTest, [{
        key: "handleOnChange",
        value: function handleOnChange(event) {
            this.setState({ type: event.target.value });
        }

        // item shoud be an object with the attributes: attribute and value

    }, {
        key: "handleAddStep",
        value: function handleAddStep() {
            this.setState(function (state, props) {
                var newList = [].concat(_toConsumableArray(state.stepList));
                newList.push({ kind: undefined, value: undefined, key: state.lastKey + 1 });
                return {
                    stepList: newList,
                    lastKey: state.lastKey + 1
                };
            });
        }
    }, {
        key: "handleStepChange",
        value: function handleStepChange(index, newElement) {
            var _this2 = this;

            this.setState(function (state, props) {
                var newList = [].concat(_toConsumableArray(state.stepList));
                newList[index].value = newElement;
                _this2.updateObject();
                return {
                    stepList: newList
                };
            });
        }
    }, {
        key: "handleKindChange",
        value: function handleKindChange(index, newKind) {
            var _this3 = this;

            this.setState(function (state, props) {
                var newList = [].concat(_toConsumableArray(state.stepList));
                newList[index].kind = newKind;
                newList[index].value = undefined;
                _this3.updateObject();
                return {
                    stepList: newList
                };
            });
        }
    }, {
        key: "handleRemoveStep",
        value: function handleRemoveStep(key) {
            this.setState(function (state, props) {
                var newList = state.stepList.filter(function (val, i) {
                    return val.key != key;
                });
                return {
                    stepList: newList
                };
            }, this.forceUpdate);
        }
    }, {
        key: "updateObject",
        value: function updateObject() {
            window.web_test = this.state;
            console.log(window.web_test);
        }
    }, {
        key: "getComponent",
        value: function getComponent(kind) {
            var components = {
                "selector_style": WebTestStyleAttributeList,
                "function_exists": WebTestFunctionExists,
                "selector_exists": WebTestSelectorExists,
                "click": WebTestClick,
                "type": WebTestType,
                "expect_function_called": WebTestExpectFunctionCalled
            };
            if (kind !== undefined && kind in components) {
                return components[kind];
            } else {
                return undefined;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var items = this.state.stepList.map(function (item, index) {
                var element;
                var ElementComponent = _this4.getComponent(item.kind);
                if (ElementComponent !== undefined) {
                    element = React.createElement(ElementComponent, { index: index, handler: _this4.handleStepChange.bind(_this4), initialState: item.value });
                } else {
                    element = "";
                }
                var selector = React.createElement(WebTestSelector, { initialKind: item.kind, index: index, handler: _this4.handleKindChange.bind(_this4) });
                var remove = React.createElement(
                    "a",
                    { onClick: _this4.handleRemoveStep.bind(_this4, item.key) },
                    "Remove step"
                );
                return React.createElement(
                    "li",
                    { key: item.key },
                    React.createElement(
                        "div",
                        null,
                        selector,
                        element,
                        remove
                    )
                );
            });

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "ul",
                    null,
                    items
                ),
                React.createElement(
                    "a",
                    { onClick: this.handleAddStep },
                    "Add step"
                )
            );
        }
    }]);

    return WebTest;
}(React.Component);

// export default WebTest;