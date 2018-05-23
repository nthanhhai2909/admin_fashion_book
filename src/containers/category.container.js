import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bookActions from '../actions/book.action'
import Category from '../components/category/category'
class CategoryContainer extends Component {
    constructor() {
        super()
    }
    componentWillMount() {
        this.props.bookActions.getCategory()
    }

    render() {
        return (
            <Category
                category={this.props.category}
                addCategory={(name) => this.props.bookActions.addCategory(name)}
                isadd={this.props.isadd}
            />
        )
    }
}
const mapStateToProps = state => ({
    category: state.bookReducers.category.data,
    isadd: state.bookReducers.category.isadd
})

const mapDispatchToProps = dispatch => {
    return ({
        bookActions: bindActionCreators(bookActions, dispatch),
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryContainer)