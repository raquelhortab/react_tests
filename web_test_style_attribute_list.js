var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebTestStyleAttributeList = function (_React$Component) {
    _inherits(WebTestStyleAttributeList, _React$Component);

    function WebTestStyleAttributeList(props) {
        _classCallCheck(this, WebTestStyleAttributeList);

        var _this = _possibleConstructorReturn(this, (WebTestStyleAttributeList.__proto__ || Object.getPrototypeOf(WebTestStyleAttributeList)).call(this, props));

        if (props.initialState) {
            _this.state = props.initialState;
        } else {
            _this.state = {
                selector: props.initialSelector ? props.initialSelector : "",
                listItems: props.initialListItems ? props.initialListItems : []
            };
        }
        _this.handleAddItem = _this.handleAddItem.bind(_this);
        _this.updateObject = _this.updateObject.bind(_this);
        _this.handleSelectorChange = _this.handleSelectorChange.bind(_this);
        return _this;
    }

    // item shoud be an object with the attributes: attribute and value


    _createClass(WebTestStyleAttributeList, [{
        key: "handleAddItem",
        value: function handleAddItem() {
            var _this2 = this;

            var handlerCallback = function handlerCallback() {
                _this2.props.handler(_this2.props.index, _this2.state);
            };
            this.setState(function (state, props) {
                var newList = [].concat(_toConsumableArray(state.listItems));
                newList.push({ attribute: "other", value: "nice" });
                return {
                    listItems: newList
                };
            }, handlerCallback);
        }
    }, {
        key: "handleSelectorChange",
        value: function handleSelectorChange(event) {
            var _this3 = this;

            var handlerCallback = function handlerCallback() {
                _this3.props.handler(_this3.props.index, _this3.state);
            };
            this.setState({ selector: event.target.value }, handlerCallback);
        }
    }, {
        key: "handleChildChange",
        value: function handleChildChange(index, newElement) {
            var _this4 = this;

            var handlerCallback = function handlerCallback() {
                _this4.props.handler(_this4.props.index, _this4.state);
            };
            this.setState(function (state, props) {
                var newList = [].concat(_toConsumableArray(state.listItems));
                newList[index] = newElement;
                return {
                    listItems: newList
                };
            }, handlerCallback);
        }
    }, {
        key: "updateObject",
        value: function updateObject() {
            window.webStyleListObject = this.state;
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var items = this.state.listItems.map(function (item, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    React.createElement(WebTestStyleAttribute, { index: index, handler: _this5.handleChildChange.bind(_this5), initialAttribute: item.attribute, initialValue: item.value })
                );
            });
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "label",
                    null,
                    "Selector",
                    React.createElement("input", { type: "text", onChange: this.handleSelectorChange, value: this.state.selector })
                ),
                React.createElement(
                    "ul",
                    null,
                    items
                ),
                React.createElement(
                    "a",
                    { onClick: this.handleAddItem },
                    "Add item"
                )
            );
        }
    }]);

    return WebTestStyleAttributeList;
}(React.Component);

// export default WebTestStyleAttributeList;