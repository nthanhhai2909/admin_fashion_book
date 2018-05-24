import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import User from '../components/user/user'
class UserContainer extends Component {
    constructor() {
        super()
    }
    componentWillMount() {
        this.props.userActions.getUser()
    }

    render() {
        return (
            <User
                user={this.props.user}
                deleteUser={(email) => this.props.userActions.deleteUser(email)}
            />
        )
    }
}
const mapStateToProps = state => ({
    user: state.userReducers.user.data
})

const mapDispatchToProps = dispatch => {
    return ({
        userActions: bindActionCreators(userActions, dispatch),
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)