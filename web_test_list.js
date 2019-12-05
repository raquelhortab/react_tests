var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebTestList = function (_React$Component) {
    _inherits(WebTestList, _React$Component);

    function WebTestList(props) {
        _classCallCheck(this, WebTestList);

        var _this = _possibleConstructorReturn(this, (WebTestList.__proto__ || Object.getPrototypeOf(WebTestList)).call(this, props));

        _this.state = {
            testList: props.initialTestList ? props.initialTestList : [],
            lastKey: props.initialTestList && props.initialTestList.length > 0 ? props.initialTestList.slice(-1)[0].key : 0
        };
        _this.handleAddTest = _this.handleAddTest.bind(_this);
        _this.handleChangeTest = _this.handleChangeTest.bind(_this);
        _this.handleRemoveTest = _this.handleRemoveTest.bind(_this);
        return _this;
    }

    _createClass(WebTestList, [{
        key: "handleAddTest",
        value: function handleAddTest() {
            this.setState(function (state, props) {
                var newList = [].concat(_toConsumableArray(state.testList));
                newList.push({ value: undefined, key: state.lastKey + 1 });
                console.log("new");
                console.log(newList);
                return {
                    testList: newList,
                    lastKey: state.lastKey + 1
                };
            }, this.updateObject);
        }
    }, {
        key: "handleRemoveTest",
        value: function handleRemoveTest(key) {
            var callback = function callback() {
                this.updateObject();
            };
            this.setState(function (state, props) {
                var newList = state.testList.filter(function (val, i) {
                    return val.key != key;
                });
                return {
                    testList: newList
                };
            }, this.updateObject);
        }
    }, {
        key: "handleChangeTest",
        value: function handleChangeTest(index, newElement) {
            this.setState(function (state, props) {
                var newList = [].concat(_toConsumableArray(state.testList));
                newList[index].value = newElement;
                return {
                    testList: newList
                };
            }, this.updateObject);
        }
    }, {
        key: "updateObject",
        value: function updateObject() {
            window.web_test = this.state.testList;
            console.log(window.web_test);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var items = this.state.testList.map(function (item, index) {
                return React.createElement(
                    "li",
                    { key: item.key },
                    React.createElement(
                        "span",
                        null,
                        "Test ",
                        index + 1
                    ),
                    React.createElement("br", null),
                    React.createElement(WebTest, { index: index, key: item.key, initialState: item.value }),
                    React.createElement(
                        "a",
                        { onClick: _this2.handleRemoveTest.bind(_this2, item.key) },
                        "Remove test"
                    )
                );
            });

            return React.createElement(
                "div",
                null,
                items,
                React.createElement(
                    "a",
                    { onClick: this.handleAddTest },
                    "Add test"
                )
            );
        }
    }]);

    return WebTestList;
}(React.Component);