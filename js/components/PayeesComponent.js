class Payees extends React.Component {
    constructor(props) {
      super(props);
        this.refreshPage = this.refreshPage.bind(this);
        this.fullPayeeList = [{
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

        this.state = {
            payees: []
        }
    }
  
    //to refresh page payees
    refreshPage(pagePayees) {
        console.log('payees: inside refresh', pagePayees);
        this.setState({
            payees: pagePayees
        });
    }

    render() {
        console.log('payees: inside render function', this.state.payees);
        return (
          <div>
            <br />
            <h4 className="col-xs-12">Payees</h4>
            <br />
            <div  className="col-xs-12">
              <table className="table table-striped table-bordered table-responsive">
              <thead>
                <tr>
                  <th className="col-xs-5">Payee name</th>
                  <th className="col-xs-3 text-center">BSB</th>
                  <th className="col-xs-4 text-right">Account Num</th>
                </tr>
              </thead>
              <tbody>            
                {this.state.payees.map(function(payee,index){
                    return (<tr key={index}>
                      <td className="col-xs-5 text-left">
                        {payee.accountName}
                      </td>
                      <td className="col-xs-3 text-center">
                        {payee.bsbDisp}
                      </td>
                      <td className="col-xs-4 text-right">
                        {payee.accountNumDisp}
                      </td>
                    </tr>)  
                })}
            </tbody>
            </table>
            </div>
            <Paginate fullList={this.fullPayeeList} pageSize={5} refreshPage={this.refreshPage}/>
            </div>)
    }
}