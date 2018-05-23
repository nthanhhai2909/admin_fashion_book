import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bookActions from '../actions/book.action'
import Book from '../components/book/book'
class BookContainer extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentWillMount() {
        this.props.bookActions.getBook()
    }
    render() {
        return (
            <div>
                <Book
                    book={this.props.book}
                    totalpage={this.props.totalpage}
                    page={this.props.page}
                    deleteBook={(id) => this.props.bookActions.deleteBook(id)}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    book: state.bookReducers.book.data,
    totalpage: state.bookReducers.book.totalpage,
    page: state.bookReducers.book.page,
})

const mapDispatchToProps = dispatch => {
    return ({
        bookActions: bindActionCreators(bookActions, dispatch),
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookContainer)