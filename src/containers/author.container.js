import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bookActions from '../actions/book.action'
import Author from '../components/author/author'
class AuthorContainer extends Component {
    constructor() {
        super()
    }
    componentWillMount() {
        this.props.bookActions.getAuthor()
    }

    render() {
        return (
            <Author
                author={this.props.author}
                isadd={this.props.isadd}
                addAuthor={(name) => this.props.bookActions.addAuthor(name)}
                updateAuthor={(id, name) => this.props.bookActions.updateAuthor(id, name)}
                isupdate={this.props.isupdate}
            />
        )
    }
}
const mapStateToProps = state => ({
    author: state.bookReducers.author.data,
    isadd: state.bookReducers.author.isadd,
    isupdate: state.bookReducers.author.isupdate
})

const mapDispatchToProps = dispatch => {
    return ({
        bookActions: bindActionCreators(bookActions, dispatch),
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorContainer)