"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paginate = function (_React$Component) {
    _inherits(Paginate, _React$Component);

    function Paginate(props) {
        _classCallCheck(this, Paginate);

        var _this = _possibleConstructorReturn(this, (Paginate.__proto__ || Object.getPrototypeOf(Paginate)).call(this, props));

        _this.currentPage = 1;
        _this.goToPage = 1;
        var listToPageRatio = _this.props.fullList.length / _this.props.pageSize;
        var listToPageRem = listToPageRatio % 1;
        _this.lastPage = listToPageRem === 0 ? listToPageRatio : listToPageRatio - listToPageRem + 1;

        _this.navigateToFirst = _this.navigateToFirst.bind(_this);
        _this.navigateToPrev = _this.navigateToPrev.bind(_this);
        _this.navigateToPage = _this.navigateToPage.bind(_this);
        _this.navigateToNext = _this.navigateToNext.bind(_this);
        _this.navigateToLast = _this.navigateToLast.bind(_this);
        _this.filterCurrentPage = _this.filterCurrentPage.bind(_this);
        _this.refreshPage = _this.refreshPage.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Paginate, [{
        key: "filterCurrentPage",
        value: function filterCurrentPage() {
            var self = this;

            var endIndex = self.currentPage * this.props.pageSize;
            var startIndex = endIndex - this.props.pageSize;
            endIndex = endIndex - 1;

            var result = this.props.fullList.filter(function (element, index) {
                return index >= startIndex && index <= endIndex;
            });

            if (self.pageNumField) self.pageNumField.value = self.currentPage;

            return result && result.length ? result : [];
        }
    }, {
        key: "navigateToFirst",
        value: function navigateToFirst() {
            var self = this;
            self.currentPage = self.goToPage = 1;
            this.refreshPage();
        }
    }, {
        key: "navigateToPrev",
        value: function navigateToPrev() {
            var self = this;
            self.currentPage--;
            self.goToPage--;
            this.refreshPage();
        }
    }, {
        key: "navigateToPage",
        value: function navigateToPage() {
            var self = this;
            if (parseInt(self.goToPage) >= 1 && parseInt(self.goToPage) <= self.lastPage && parseInt(self.goToPage) != self.currentPage) {
                self.currentPage = self.goToPage = parseInt(self.goToPage);
                self.refreshPage();
            } else {
                self.goToPage = self.currentPage;
                self.pageNumField.value = self.goToPage;
            }
        }
    }, {
        key: "navigateToNext",
        value: function navigateToNext() {
            var self = this;
            self.currentPage++;
            self.goToPage++;
            this.refreshPage();
        }
    }, {
        key: "navigateToLast",
        value: function navigateToLast() {
            var self = this;
            self.currentPage = self.goToPage = self.lastPage;
            this.refreshPage();
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.refreshPage();
        }
    }, {
        key: "refreshPage",
        value: function refreshPage() {
            this.props.refreshPage(this.filterCurrentPage());
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            event.preventDefault();
            this.goToPage = this.pageNumField.value;
            this.navigateToPage();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "paginate col-xs-12" },
                React.createElement(
                    "button",
                    { onClick: this.navigateToFirst, disabled: this.currentPage === 1, className: "btn bnt-sm btn-soft col-xs-2" },
                    "First"
                ),
                React.createElement(
                    "button",
                    { onClick: this.navigateToPrev, disabled: this.currentPage === 1, className: "btn bnt-sm btn-soft col-xs-2" },
                    "Previous"
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    React.createElement("input", { type: "text", className: "form-control col-xs-2", defaultValue: this.goToPage,
                        ref: function ref(input) {
                            _this2.pageNumField = input;
                        } }),
                    React.createElement(
                        "button",
                        { disabled: !this.goToPage, className: "btn bnt-sm btn-primary col-xs-2" },
                        "Go"
                    )
                ),
                React.createElement(
                    "button",
                    { onClick: this.navigateToNext, disabled: this.currentPage === this.lastPage, className: "btn bnt-sm btn-soft col-xs-2" },
                    "Next"
                ),
                React.createElement(
                    "button",
                    { onClick: this.navigateToLast, disabled: this.currentPage === this.lastPage, className: "btn bnt-sm btn-soft col-xs-2" },
                    "Last"
                )
            );
        }
    }]);

    return Paginate;
}(React.Component);