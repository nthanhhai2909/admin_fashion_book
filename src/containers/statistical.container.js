import React, {Component} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import Statistical from '../components/statistical/statistical'
class StatisticalContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section id="container" className="">
            <NavbarContainer />
             <Slider />
             <Statistical/>
            </section>
        )
    }
}
const mapStateToProps = state => ({
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      userActions: bindActionCreators(userActions, dispatch)
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(StatisticalContainer);
  
