"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Billers = function (_React$Component) {
    _inherits(Billers, _React$Component);

    function Billers(props) {
        _classCallCheck(this, Billers);

        var _this = _possibleConstructorReturn(this, (Billers.__proto__ || Object.getPrototypeOf(Billers)).call(this, props));

        _this.refreshPage = _this.refreshPage.bind(_this);
        _this.fullBillerList = [{
            "billerCode": "1818",
            "crn": "4564426300102115",
            "billerName": "Biller 1"
        }, {
            "billerCode": "1819",
            "crn": "4564426300102119",
            "billerName": "Biller 2"
        }, {
            "billerCode": "1820",
            "crn": "4564426300102120",
            "billerName": "Biller 3"
        }, {
            "billerCode": "1823",
            "crn": "4564426300102123",
            "billerName": "Biller 4"
        }, {
            "billerCode": "1488",
            "crn": "4564426300102188",
            "billerName": "Biller 5"
        }, {
            "billerCode": "1418",
            "crn": "4564426300102115",
            "billerName": "Biller 6"
        }, {
            "billerCode": "1419",
            "crn": "4564426300102119",
            "billerName": "Biller 7"
        }, {
            "billerCode": "1420",
            "crn": "4564426300102120",
            "billerName": "Biller 8"
        }, {
            "billerCode": "1823",
            "crn": "4564426300102123",
            "billerName": "Biller 9"
        }, {
            "billerCode": "1488",
            "crn": "4564426300102188",
            "billerName": "Biller 10"
        }, {
            "billerCode": "1418",
            "crn": "4564426300102115",
            "billerName": "Biller 11"
        }, {
            "billerCode": "1419",
            "crn": "4564426300102119",
            "billerName": "Biller 12"
        }, {
            "billerCode": "1420",
            "crn": "4564426300102120",
            "billerName": "Biller 13"
        }, {
            "billerCode": "1823",
            "crn": "4564426300102123",
            "billerName": "Biller 14"
        }, {
            "billerCode": "1488",
            "crn": "4564426300102188",
            "billerName": "Biller 15"
        }];

        _this.state = {
            billers: []
        };
        return _this;
    }

    _createClass(Billers, [{
        key: "refreshPage",
        value: function refreshPage(pageBillers) {
            console.log('billers: inside refreshPage', pageBillers);
            this.setState({
                billers: pageBillers
            });
        }
    }, {
        key: "render",
        value: function render() {
            console.log('billers: inside render function', this.state.billers);
            return React.createElement(
                "div",
                null,
                React.createElement("br", null),
                React.createElement(
                    "h4",
                    { className: "col-xs-12" },
                    "Billers"
                ),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { className: "col-xs-12" },
                    React.createElement(
                        "table",
                        { className: "table table-striped table-bordered table-responsive" },
                        React.createElement(
                            "thead",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "th",
                                    { className: "col-xs-5" },
                                    "Biller name"
                                ),
                                React.createElement(
                                    "th",
                                    { className: "col-xs-3 text-center" },
                                    "Biller Code"
                                ),
                                React.createElement(
                                    "th",
                                    { className: "col-xs-4 text-right" },
                                    "Customer Ref Number"
                                )
                            )
                        ),
                        React.createElement(
                            "tbody",
                            null,
                            this.state.billers.map(function (biller, index) {
                                return React.createElement(
                                    "tr",
                                    { key: index },
                                    React.createElement(
                                        "td",
                                        { className: "col-xs-5 text-left" },
                                        biller.billerName
                                    ),
                                    React.createElement(
                                        "td",
                                        { className: "col-xs-3 text-center" },
                                        biller.billerCode
                                    ),
                                    React.createElement(
                                        "td",
                                        { className: "col-xs-4 text-right" },
                                        biller.crn
                                    )
                                );
                            })
                        )
                    )
                ),
                React.createElement(Paginate, { fullList: this.fullBillerList, pageSize: 5, refreshPage: this.refreshPage })
            );
        }
    }]);

    return Billers;
}(React.Component);