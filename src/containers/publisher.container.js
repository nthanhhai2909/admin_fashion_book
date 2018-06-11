import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../actions/book.action";
import Publisher from "../components/publisher/publisher";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
class PublisherContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.bookActions.getPublisher();
    let res = await this.props.userActions.auth()
        if (res === false)
            this.props.history.push('/login')
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Publisher
          publisher={this.props.publisher}
          isadd={this.props.isadd}
          addPublisher={name => this.props.bookActions.addPublisher(name)}
          updatePublisher={(id, name) =>
            this.props.bookActions.updatePublisher(id, name)
          }
          isupdate={this.props.isupdate}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  publisher: state.bookReducers.publisher.data,
  isadd: state.bookReducers.publisher.isadd,
  isupdate: state.bookReducers.publisher.isupdate
});

const mapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublisherContainer);
