import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bookActions from '../actions/book.action'
import Publisher from '../components/publisher/publisher'
class PublisherContainer extends Component {
    constructor() {
        super()
    }
    componentWillMount() {
        this.props.bookActions.getPublisher()
    }

    render() {
        return (
            <Publisher
                publisher={this.props.publisher}
                isadd={this.props.isadd}
                addPublisher={(name) => this.props.bookActions.addPublisher(name)}
                updatePublisher={(id, name) => this.props.bookActions.updatePublisher(id, name)}
                isupdate={this.props.isupdate}
            />
        )
    }
}
const mapStateToProps = state => ({
    publisher: state.bookReducers.publisher.data,
    isadd: state.bookReducers.publisher.isadd,
    isupdate: state.bookReducers.publisher.isupdate
})

const mapDispatchToProps = dispatch => {
    return ({
        bookActions: bindActionCreators(bookActions, dispatch),
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PublisherContainer)