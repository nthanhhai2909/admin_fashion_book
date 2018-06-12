import React, { Component } from "react";
class Statistical extends Component {
  constructor() {
    super();
  }
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
