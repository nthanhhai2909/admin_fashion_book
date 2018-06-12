import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import Statistical from "../components/statistical/statistical";
class StatisticalContainer extends Component {
  constructor() {
    super();
    this.state = {
      dataByDay: []
    };
  }
  getStatisticalByDay = async value => {
    let date = value.split("-");
    let res = null;
    try {
      res = await axios.post(
        "http://localhost:8080/bill/statistical/revenue/day",
        {
          day: date[2],
          month: date[1],
          year: date[0]
        }
      );
    } catch (err) {
      console.log(err);
      return;
    }
    this.setState({ dataByDay: res.data.data });
  };
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Statistical
          getStatisticalByDay={value => this.getStatisticalByDay(value)}
          dataByDay={this.state.dataByDay}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatisticalContainer);
