import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../actions/book.action";
import Book from "../components/book/book";
class BookContainer extends Component {
  componentWillMount() {
    this.props.bookActions.getCategory();
    this.props.bookActions.getPublisher();
    this.props.bookActions.getBook();
    this.props.bookActions.getAuthor();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.page !== this.props.page) {
        this.props.bookActions.getBook()
    }
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
          deleteBook={id => this.props.bookActions.deleteBook(id)}
          backPage={() => this.props.bookActions.backPage()}
          nextPage={() => this.props.bookActions.nextPage()}
          setPage={page => this.props.bookActions.setPage(page)}
          isadd={this.props.isadd}
          isupdate={this.props.isupdate}  
          addBook={(id_category, name, price, release_date, describe, id_nsx, id_author, file) => 
                this.props.bookActions.addBook(id_category, name, price, release_date, describe, id_nsx, id_author, file)}
          updateBook={(id, name, id_category, price, release_date, describe, id_nsx, id_author, file ) =>
             this.props.bookActions.updateBook(id, name, id_category, price, release_date, describe, id_nsx, id_author, file)}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  book: state.bookReducers.book.data,
  totalpage: state.bookReducers.book.totalpage,
  page: state.bookReducers.book.page,
  category: state.bookReducers.category.data,
  publisher: state.bookReducers.publisher.data,
  author: state.bookReducers.author.data,
  isadd: state.bookReducers.book.isadd,
  isupdate: state.bookReducers.book.isupdate
});

const mapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
