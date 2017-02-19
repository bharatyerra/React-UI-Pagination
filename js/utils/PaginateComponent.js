class Paginate extends React.Component {
    constructor(props) {
      super(props);

        this.currentPage = 1;
        this.goToPage = 1;
        var listToPageRatio = this.props.fullList.length / this.props.pageSize;
        var listToPageRem = listToPageRatio % 1;
        this.lastPage = (listToPageRem === 0) ? listToPageRatio : ((listToPageRatio - listToPageRem) + 1);

        this.navigateToFirst = this.navigateToFirst.bind(this);
        this.navigateToPrev = this.navigateToPrev.bind(this);
        this.navigateToPage = this.navigateToPage.bind(this);
        this.navigateToNext = this.navigateToNext.bind(this);
        this.navigateToLast = this.navigateToLast.bind(this);
        this.filterCurrentPage = this.filterCurrentPage.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    filterCurrentPage() {
        var self = this;

        var endIndex = (self.currentPage * this.props.pageSize);
        var startIndex = endIndex - this.props.pageSize;
        endIndex = endIndex - 1;

        var result = this.props.fullList.filter(function(element, index) {
            return (index >= startIndex && index <= endIndex);
        });

        if (self.pageNumField)
            self.pageNumField.value = self.currentPage;

        return (result && result.length) ? result : [];
    }

    navigateToFirst() {
        var self = this;
        self.currentPage = self.goToPage = 1;
        this.refreshPage();
    }

    navigateToPrev() {
        var self = this;
        self.currentPage--;
        self.goToPage--;
        this.refreshPage();
    }

    navigateToPage() {
        var self = this;
        if (parseInt(self.goToPage) >= 1 && parseInt(self.goToPage) <= self.lastPage && parseInt(self.goToPage) != self.currentPage) {
            self.currentPage = self.goToPage = parseInt(self.goToPage);
            self.refreshPage();
        } else {
            self.goToPage = self.currentPage;
            self.pageNumField.value = self.goToPage;
        }
    }

    navigateToNext() {
        var self = this;
        self.currentPage++;
        self.goToPage++;
        this.refreshPage();
    }

    navigateToLast() {
        var self = this;
        self.currentPage = self.goToPage = self.lastPage;
        this.refreshPage();
    }

    componentWillMount() {
        this.refreshPage();
    }

    refreshPage() {
        this.props.refreshPage(this.filterCurrentPage());
    }

    handleSubmit(event) {
        event.preventDefault();
        this.goToPage = this.pageNumField.value;
        this.navigateToPage();
    }

    render() {
        return (
          <div className="paginate col-xs-12">
              <button onClick={this.navigateToFirst} disabled={(this.currentPage === 1)} className="btn bnt-sm btn-soft col-xs-2">First</button>
              <button onClick={this.navigateToPrev} disabled={(this.currentPage === 1)} className="btn bnt-sm btn-soft col-xs-2">Previous</button>
              <form onSubmit={ this.handleSubmit }>
              <input type="text" className="form-control col-xs-2" defaultValue={this.goToPage} 
                    ref={ (input) =>{ this.pageNumField = input } }/>
            <button disabled={(!this.goToPage)} className="btn bnt-sm btn-primary col-xs-2">Go</button>
            </form>
            <button onClick={this.navigateToNext}  disabled={(this.currentPage === this.lastPage)} className="btn bnt-sm btn-soft col-xs-2">Next</button>
            <button onClick={this.navigateToLast} disabled={(this.currentPage === this.lastPage)} className="btn bnt-sm btn-soft col-xs-2">Last</button>
         </div>)
    }
}