import React, { Component } from "react";
class Statistical extends Component {
  constructor() {
    super();
    this.state = {
      billNumberDay: null,
      productNumberDay: null,
      UserNumberDay: null,
      totalDay: null,
      billNumberMonth: null,
      productNumberMonth: null,
      UserNumberMonth: null,
      totalMonth: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataByDay !== this.props.dataByDay) {
      this.setState({
        billNumberDay: nextProps.dataByDay.length,
        productNumberDay: this.calculatorProductNumber(nextProps.dataByDay),
        UserNumberDay: this.calculatorUserNumber(nextProps.dataByDay),
        totalDay: this.calculatorTotal(nextProps.dataByDay)
      });
    }
    if (nextProps.dataByMonth !== this.props.dataByMonth) {
      this.setState({
        billNumberMonth: nextProps.dataByMonth.length,
        productNumberMonth: this.calculatorProductNumber(nextProps.dataByMonth),
        UserNumberMonth: this.calculatorUserNumber(nextProps.dataByMonth),
        totalMonth: this.calculatorTotal(nextProps.dataByMonth)
      });
    }
  }
  calculatorTotal = bills => {
    let total = 0;
    for (let i = 0; i < bills.length; i++) {
      for (let k = 0; k < bills[i].products.length; k++) {
        total += parseInt(
          bills[i].products[k].count * parseInt(bills[i].products[k].price)
        );
      }
    }
    return total;
  };
  calculatorProductNumber = bills => {
    let total = 0;
    for (let i = 0; i < bills.length; i++) {
      for (let k = 0; k < bills[i].products.length; k++) {
        total += parseInt(bills[i].products[k].count);
      }
    }
    console.log(total)
    return total;
  };
  calculatorUserNumber = bills => {
    let arr = [];
    for (let i = 0; i < bills.length; i++) {
      if (arr.indexOf(bills.id_user) === -1) {
        arr.push(bills.id_user);
      }
    }
    return arr.length;
  };
  render() {
    return (
      <section id="main-content">
        <section class="wrapper">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="page-header">
                <i class="fa fa-table" /> STATISTICAL
              </h3>
              <ol class="breadcrumb">
                <li>
                  <i class="fa fa-home" />
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <i class="fa fa-table" />Statistical
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  STATISTICS BY DAY
                  <span style={{ marginLeft: "50px" }}>Select Day</span>
                  <input
                    type="date"
                    style={{
                      marginLeft: "10px",
                      height: "30px",
                      backgroundColor: "#F7F7F7",
                      borderRadius: "5px"
                    }}
                    onChange={e =>
                      this.props.getStatisticalByDay(e.target.value)
                    }
                  />
                </header>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Number bill</th>
                        <th>Number Product</th>
                        <th>Number user</th>
                        <th>Total revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.billNumberDay}</td>
                        <td>{this.state.productNumberDay}</td>
                        <td>{this.state.UserNumberDay}</td>
                        <td>{this.state.totalDay}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  STATISTICS BY MONTH
                  <span style={{ marginLeft: "50px" }}>Select Month</span>
                  <input
                    type="month"
                    style={{
                      marginLeft: "10px",
                      height: "30px",
                      backgroundColor: "#F7F7F7",
                      borderRadius: "5px"
                    }}
                    onChange={(e) => this.props.getStatisticalByMonth(e.target.value)}
                  />
                </header>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Number bill</th>
                        <th>Number Product</th>
                        <th>Number user</th>
                        <th>Total revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.billNumberMonth}</td>
                        <td>{this.state.productNumberMonth}</td>
                        <td>{this.state.UserNumberMonth}</td>
                        <td>{this.state.totalMonth}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  STATISTICS BY YEAR
                  <span style={{ marginLeft: "50px" }}>Select Year</span>
                  <input
                    type="number"
                    style={{
                      marginLeft: "10px",
                      height: "30px",
                      backgroundColor: "#F7F7F7",
                      borderRadius: "5px"
                    }}
                    min="2000"
                  />
                </header>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Number bill</th>
                        <th>Number Product</th>
                        <th>Number user</th>
                        <th>Total revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  STATISTICS BY QUAUTER
                  <span style={{ marginLeft: "50px" }}>Select Year</span>
                  <input
                    type="number"
                    style={{
                      marginLeft: "10px",
                      height: "30px",
                      backgroundColor: "#F7F7F7",
                      borderRadius: "5px"
                    }}
                    min="2000"
                  />
                  <span style={{ marginLeft: "50px" }}>Select Quauter</span>
                  <input
                    type="number"
                    style={{
                      marginLeft: "10px",
                      height: "30px",
                      backgroundColor: "#F7F7F7",
                      borderRadius: "5px"
                    }}
                    min="2000"
                  />
                </header>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Number bill</th>
                        <th>Number Product</th>
                        <th>Number user</th>
                        <th>Total revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
export default Statistical;
