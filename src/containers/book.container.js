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
        this.props.bookActions.getCategory()
        this.props.bookActions.getPublisher()
        this.props.bookActions.getBook()
        this.props.bookActions.getAuthor()
    }
    render() {
        return (
            <div>
                <Book
                    book={this.props.book}
                    totalpage={this.props.totalpage}
                    page={this.props.page}
                    category={this.props.category}
                    publisher={this.props.publisher}
                    author={this.props.author}
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
    category: state.bookReducers.category.data,
    publisher: state.bookReducers.publisher.data,
    author: state.bookReducers.author.data,
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