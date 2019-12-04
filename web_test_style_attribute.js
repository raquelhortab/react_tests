var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebTestStyleAttribute = function (_React$Component) {
  _inherits(WebTestStyleAttribute, _React$Component);

  function WebTestStyleAttribute(props) {
    _classCallCheck(this, WebTestStyleAttribute);

    var _this = _possibleConstructorReturn(this, (WebTestStyleAttribute.__proto__ || Object.getPrototypeOf(WebTestStyleAttribute)).call(this, props));

    var attribute = props.initialAttribute ? props.initialAttribute : "";
    var value = props.initialValue ? props.initialValue : "";
    _this.state = {
      attribute: attribute,
      value: value
    };
    _this.handleAttributeChange = _this.handleAttributeChange.bind(_this);
    _this.handleValueChange = _this.handleValueChange.bind(_this);
    return _this;
  }

  _createClass(WebTestStyleAttribute, [{
    key: "handleAttributeChange",
    value: function handleAttributeChange(event) {
      this.setState({ attribute: event.target.value }, function () {
        this.props.handler(this.props.index, this.state);
      });
    }
  }, {
    key: "handleValueChange",
    value: function handleValueChange(event) {
      this.setState({ value: event.target.value }, function () {
        this.props.handler(this.props.index, this.state);
      });
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "label",
          null,
          "Attribute",
          React.createElement("input", { type: "text", name: "attribute", value: this.state.attribute, onChange: this.handleAttributeChange })
        ),
        React.createElement(
          "label",
          null,
          "Value",
          React.createElement("input", { type: "text", name: "value", value: this.state.value, onChange: this.handleValueChange })
        )
      );
    }
  }]);

  return WebTestStyleAttribute;
}(React.Component);

// export default WebTestStyleAttribute;