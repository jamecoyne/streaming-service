"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertMessage = function AlertMessage(props) {
   
  return _react2.default.createElement(
    "div",
    { className: "sc-message--alert" },
    props.author + " " + props.data.text
  );
};

exports.default = AlertMessage;
module.exports = exports["default"];