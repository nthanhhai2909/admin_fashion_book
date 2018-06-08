import React, { Component } from "react";
import { Link } from "react-router-dom";
class Category extends Component {
  constructor() {
    super();
    this.state = {
      pagination: [],
      currname: null,
      name: null,
      id: null,
      noti: null,
      currType: "add"
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isadd === false) {
      this.setState({
        noti: "Please Change name"
      });
    } else if (nextProps.isadd === true) {
      this.setState({
        noti: "",
        name: "",
        currType: "add"
      });
    }
    if (nextProps.isupdate === false) {
      this.setState({
        noti: "update fail"
      });
    } else if (nextProps.isupdate === true) {
      this.setState({
        noti: "",
        id: null,
        name: "",
        currType: "add"
      });
    }
  }
  add = () => {
    this.props.addCategory(this.state.name);
  };
  renderBtn = () => {
    if (this.state.currType === "add") {
      return (
        <div className="form-group">
          <div className="col-lg-offset-2 col-lg-10">
            <button
              onClick={() => this.add()}
              style={{}}
              className="btn-custom"
            >
              Add
            </button>
            <button
              disabled
              onClick={() =>
                this.props.updateCategory(this.state.id, this.state.name)
              }
              className="btn-custom"
            >
              Update
            </button>
            <button
              onClick={() => this.reset()}
              className="btn-custom"
            >
              Reset
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="form-group">
          <div className="col-lg-offset-2 col-lg-10">
            <button disabled onClick={() => this.add()} className="btn-custom">
              Add
            </button>
            <button
              onClick={() =>
                this.props.updateCategory(this.state.id, this.state.name)
              }
              className="btn-custom"
            >
              Update
            </button>
            <button
              onClick={() => this.reset()}
              className="btn-custom"
            >
              Reset
            </button>
          </div>
        </div>
      );
    }
  };
  reset = () => {
      this.setState({
        noti: "",
        id: null,
        name: "",
        currType: "add"
      })
  }

  render() {
    return (
      <section id="main-content">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header">
              <i className="fa fa-table" /> Table
            </h3>
            <ol className="breadcrumb">
              <li>
                <i className="fa fa-home" />
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa fa-table" />Table
              </li>
              <li>
                <i className="fa fa-th-list" />Category Manager
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">Advanced Table</header>
              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th>
                      <i className="icon_profile" /> Name
                    </th>
                    <th>
                      <i className="icon_cogs" /> Action
                    </th>
                  </tr>
                  {this.props.category.map((element, index) => {
                    return (
                      <tr>
                        <td>{element.name}</td>
                        <td>
                          <div className="btn-group">
                            <a
                              onClick={() =>
                                this.setState({
                                  currname: element.name,
                                  name: element.name,
                                  id: element._id,
                                  currType: "update"
                                })
                              }
                              className="btn btn-success"
                            >
                              <i className="icon_check_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">Form validations</header>
              <div className="panel-body">
                <div className="form">
                  <div className="form-validate form-horizontal">
                    <div className="form-group ">
                      <label for="cname" className="control-label col-lg-2">
                        Name <span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <input
                          onChange={e => {
                            this.setState({
                              name: e.target.value
                            });
                          }}
                          value={this.state.name}
                          className="form-control"
                          id="cname"
                          name="fullname"
                          minlength="5"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-offset-2 col-lg-10">
                        <p>{this.state.noti}</p>
                      </div>
                    </div>
                    {this.renderBtn()}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
export default Category;
