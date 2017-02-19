class Billers extends React.Component {
    constructor(props) {
      super(props);
        this.refreshPage = this.refreshPage.bind(this);
        this.fullBillerList = [{
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

        this.state = {
            billers: []
        }
    }

    refreshPage(pageBillers) {
        console.log('billers: inside refreshPage', pageBillers);
        this.setState({
            billers: pageBillers
        });
    }

    render() {
        console.log('billers: inside render function', this.state.billers);
        return (
          <div>
            <br />
            <h4 className="col-xs-12">Billers</h4>
            <br />
            <div  className="col-xs-12">
              <table className="table table-striped table-bordered table-responsive">
              <thead>
                <tr>
                  <th className="col-xs-5">Biller name</th>
                  <th className="col-xs-3 text-center">Biller Code</th>
                  <th className="col-xs-4 text-right">Customer Ref Number</th>
                </tr>
              </thead>
              <tbody>            
                {this.state.billers.map(function(biller,index){
                    return (<tr key={index}>
                      <td className="col-xs-5 text-left">
                        {biller.billerName}
                      </td>
                      <td className="col-xs-3 text-center">
                        {biller.billerCode}
                      </td>
                      <td className="col-xs-4 text-right">
                        {biller.crn}
                      </td>
                    </tr>)  
                })}
            </tbody>
            </table>
            </div>
            <Paginate fullList={this.fullBillerList} pageSize={5} refreshPage={this.refreshPage}/>
            </div>)
    }
}