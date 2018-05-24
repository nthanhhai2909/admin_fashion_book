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
                isadd={this.props.isadd}
                isupdate={this.props.isupdate}
                deleteUser={(email) => this.props.userActions.deleteUser(email)}
                addUser={(email, password, firstName, lastName, address, phone_number) => 
                    this.props.userActions.addUser(email, password, firstName, lastName, address, phone_number)}
            />
        )
    }
}
const mapStateToProps = state => ({
    user: state.userReducers.user.data,
    isadd: state.userReducers.user.isadd,
    isupdate: state.userReducers.user.isupdate
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