import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "../actions/home.action";
import Home from "../components/home/home";
class HomeContainer extends Component {
  componentWillMount() {
    this.props.homeActions.getTopProduct();
  }
  render() {
    return (
      <div>
        <Home top_product={this.props.top_product} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  top_product: state.homeReducers.home.top_product
});

const mapDispatchToProps = dispatch => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
