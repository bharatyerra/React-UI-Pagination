"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Payees = function (_React$Component) {
    _inherits(Payees, _React$Component);

    function Payees(props) {
        _classCallCheck(this, Payees);

        var _this = _possibleConstructorReturn(this, (Payees.__proto__ || Object.getPrototypeOf(Payees)).call(this, props));

        _this.refreshPage = _this.refreshPage.bind(_this);
        _this.fullPayeeList = [{
            "bsb": "032013",
            "bsbDisp": "032-013",
            "accountNum": "045896321",
            "accountNumDisp": "045 896 321",
            "alias": "New Payee",
            "accountName": "Payee 1",
            "rtgsPayee": true
        }, {
            "bsb": "032012",
            "bsbDisp": "032-012",
            "accountNum": "045896322",
            "accountNumDisp": "045 896 322",
            "accountName": "Payee 2"
        }, {
            "bsb": "032014",
            "bsbDisp": "032-014",
            "accountNum": "045896324",
            "accountNumDisp": "045 896 324",
            "alias": "payee 3",
            "accountName": "Payee 3",
            "rtgsPayee": true
        }, {
            "bsb": "032015",
            "bsbDisp": "032-015",
            "accountNum": "045896325",
            "accountNumDisp": "045 896 325",
            "accountName": "Payee 4"
        }, {
            "bsb": "032016",
            "bsbDisp": "032-016",
            "accountNum": "045896326",
            "accountNumDisp": "045 896 326",
            "alias": "Payee 5",
            "accountName": "Payee 5",
            "rtgsPayee": true
        }, {
            "bsb": "032017",
            "bsbDisp": "032-017",
            "accountNum": "045896322",
            "accountNumDisp": "045 896 327",
            "accountName": "Payee 6"
        }, {
            "bsb": "032018",
            "bsbDisp": "032-018",
            "accountNum": "045896328",
            "accountNumDisp": "045 896 328",
            "alias": "Payee 7",
            "accountName": "Payee 7",
            "rtgsPayee": true
        }, {
            "bsb": "032019",
            "bsbDisp": "032-019",
            "accountNum": "045896329",
            "accountNumDisp": "045 896 329",
            "accountName": "Payee 8"
        }, {
            "bsb": "032030",
            "bsbDisp": "032-030",
            "accountNum": "045896330",
            "accountNumDisp": "045 896 330",
            "alias": "Payee 9",
            "accountName": "Payee 9",
            "rtgsPayee": true
        }, {
            "bsb": "032031",
            "bsbDisp": "032-031",
            "accountNum": "045896331",
            "accountNumDisp": "045 896 331",
            "accountName": "Payee 10"
        }, {
            "bsb": "032032",
            "bsbDisp": "032-032",
            "accountNum": "045896332",
            "accountNumDisp": "045 896 332",
            "alias": "Payee 11",
            "accountName": "Payee 11",
            "rtgsPayee": true
        }, {
            "bsb": "032033",
            "bsbDisp": "032-033",
            "accountNum": "045896333",
            "accountNumDisp": "045 896 333",
            "accountName": "Payee 12"
        }];

        _this.state = {
            payees: []
        };
        return _this;
    }

    //to refresh page payees


    _createClass(Payees, [{
        key: "refreshPage",
        value: function refreshPage(pagePayees) {
            console.log('payees: inside refresh', pagePayees);
            this.setState({
                payees: pagePayees
            });
        }
    }, {
        key: "render",
        value: function render() {
            console.log('payees: inside render function', this.state.payees);
            return React.createElement(
                "div",
                null,
                React.createElement("br", null),
                React.createElement(
                    "h4",
                    { className: "col-xs-12" },
                    "Payees"
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
                                    "Payee name"
                                ),
                                React.createElement(
                                    "th",
                                    { className: "col-xs-3 text-center" },
                                    "BSB"
                                ),
                                React.createElement(
                                    "th",
                                    { className: "col-xs-4 text-right" },
                                    "Account Num"
                                )
                            )
                        ),
                        React.createElement(
                            "tbody",
                            null,
                            this.state.payees.map(function (payee, index) {
                                return React.createElement(
                                    "tr",
                                    { key: index },
                                    React.createElement(
                                        "td",
                                        { className: "col-xs-5 text-left" },
                                        payee.accountName
                                    ),
                                    React.createElement(
                                        "td",
                                        { className: "col-xs-3 text-center" },
                                        payee.bsbDisp
                                    ),
                                    React.createElement(
                                        "td",
                                        { className: "col-xs-4 text-right" },
                                        payee.accountNumDisp
                                    )
                                );
                            })
                        )
                    )
                ),
                React.createElement(Paginate, { fullList: this.fullPayeeList, pageSize: 5, refreshPage: this.refreshPage })
            );
        }
    }]);

    return Payees;
}(React.Component);