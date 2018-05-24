import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Book extends Component {
    constructor() {
        super()
        this.state = {
            pagination: [],
            book: null,
            file: '',
            imagePreviewUrl: null,
            curr: "add",
            category: 'category',
            publisher: 'publisher',
            author: 'author'
        }
    }
    componentWillMount() {
        let tmp = []
        for (let i = 1; i <= this.props.totalpage; i++) {
            tmp.push(i);
        }
        this.setState({ pagination: tmp })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.totalpage !== this.props.totalpage) {
            let tmp = []
            for (let i = 1; i <= nextProps.totalpage; i++) {
                tmp.push(i);
            }
            this.setState({ pagination: tmp })
        }
        if (nextProps.book !== null) {
            this.setState({
                imagePreviewUrl: nextProps.book.img
            })
        }
    }
    renderPagination() {
        if (this.state.pagination.length === 0) {
            return null
        }
        else {
            return (
                <ul className="pagination pagination-custom col-md-6 offset-md-3">
                    <li onClick={() => this.props.backPage()}
                    ><a>&laquo;</a></li>
                    {
                        this.state.pagination.map((element, index) => {
                            if (this.props.page === element) {
                                return (
                                    <li className="active" onClick={() => this.props.setPage(element)}><a >{element}</a></li>
                                )
                            } else {
                                return (
                                    <li onClick={() => this.props.setPage(element)}><a>{element}</a></li>
                                )
                            }

                        })}
                    <li onClick={() => this.props.nextPage()}
                    ><a >&raquo;</a></li>
                </ul>
            )
        }
    }
    handleChangeImg = (img) => {
        let reader = new FileReader()
        reader.onloadend = () => {
            this.setState({
                file: img,
                imagePreviewUrl: reader.result,
                book: {
                    ...this.state.book,
                    img: reader.result
                }
            });
        }
        reader.readAsDataURL(img)
    }
    renderBtnSubmit = () => {
        if (this.state.curr === "add") {
            return (
                <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                        <button className="btn-custom" type="submit">Add</button>
                        <button className="btn-custom" disabled type="button">Update</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                        <button className="btn-custom" disabled type="submit">Add</button>
                        <button className="btn-custom" type="button">Update</button>
                    </div>
                </div>
            )
        }
    }
    renderMenuCategory = () => {
        if (this.props.category) {
            return this.props.category.map((element, index) => {
                return (
                    <li><a href="#">{element.name}</a></li>
                )
            })
            
        }
        else{
            return null
        }
        return (
            <li><a href="#">asdasd</a></li>
        )
    }

    render() {
        return (
            <section id="main-content">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="page-header"><i className="fa fa-table"></i> Table</h3>
                        <ol className="breadcrumb">
                            <li><i className="fa fa-home"></i><Link to='/'>Home</Link></li>
                            <li><i className="fa fa-table"></i>Table</li>
                            <li><i className="fa fa-th-list"></i>Book Manager</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <section className="panel">
                            <header className="panel-heading">
                                Advanced Table
              </header>
                            <table className="table table-striped table-advance table-hover">
                                <tbody>
                                    <tr>
                                        <th><i className="icon_profile"></i> Name</th>
                                        <th><i className="icon_calendar"></i> Date</th>
                                        <th><i className="icon_mail_alt"></i> Price</th>
                                        <th><i className="icon_pin_alt"></i> describe</th>
                                        <th><i className="icon_cogs"></i> Action</th>
                                    </tr>
                                    {
                                        this.props.book.map((element, index) => {
                                            return (
                                                <tr>
                                                    <td>{element.name}</td>
                                                    <td>{element.release_date}</td>
                                                    <td>{element.price}</td>
                                                    <td style={{ width: "40%", }}>{element.describe}</td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <a onClick={() => this.setState({
                                                                book: element,
                                                                curr: "update"
                                                            })}
                                                                className="btn btn-success" ><i className="icon_check_alt2"></i></a>
                                                            <a onClick={() => this.props.deleteBook(element._id)} className="btn btn-danger" ><i className="icon_close_alt2"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            {this.renderPagination()}
                        </section>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <section className="panel">
                            <header className="panel-heading">
                                Form validations
              </header>
                            <div className="panel-body">
                                <div className="form">
                                    <form className="form-validate form-horizontal" id="feedback_form" method="get" action="">
                                        <div className="form-group ">
                                            <label for="cname" className="control-label col-lg-2">Name <span className="required">*</span></label>
                                            <div className="col-lg-10">
                                                <input
                                                    onChange={e => {
                                                        this.setState({
                                                            book: {
                                                                ...this.state.book,
                                                                name: e.target.value
                                                            }
                                                        })
                                                    }}
                                                    value={this.state.book && this.state.book.name ? this.state.book.name : ""}
                                                    className="form-control" id="cname" name="fullname" minlength="5" type="text" required />
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label for="cemail" className="control-label col-lg-2">Date<span className="required">*</span></label>
                                            <div className="col-lg-10">
                                                <input
                                                    value={this.state.book && this.state.book.release_date ? this.state.book.release_date.slice(0, 10) : null}
                                                    onChange={(e) => this.setState({
                                                        book: {
                                                            ...this.state.book,
                                                            release_date: e.target.value
                                                        }
                                                    })}
                                                    className="form-control " id="cemail" type="date" name="email" required />
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label for="curl" className="control-label col-lg-2">Price</label>
                                            <div className="col-lg-10">
                                                <input
                                                    value={this.state.book && this.state.book.price ? this.state.book.price : null}
                                                    onChange={(e) => this.setState({
                                                        book: {
                                                            ...this.state.book,
                                                            price: e.target.value
                                                        }
                                                    })}
                                                    className="form-control " id="curl" type="text" name="url" />
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label for="cname" className="control-label col-lg-2">Describe <span className="required">*</span></label>
                                            <div className="col-lg-10">
                                                <input
                                                    value={this.state.book && this.state.book.describe ? this.state.book.describe : null}
                                                    onChange={(e) => this.setState({
                                                        book: {
                                                            ...this.state.book,
                                                            describe: e.target.value
                                                        }
                                                    })}
                                                    className="form-control" id="subject" name="subject" minlength="5" type="text" required />
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label for="comment " className="control-label col-lg-2">Category</label>
                                            <div className="btn-group col-lg-10">
                                                <button style={{ width: "200px" }} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    {this.state.category}  <span className="caret"></span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    {this.renderMenuCategory()}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label for="comment" className="control-label col-lg-2">Author</label>
                                            <div className="btn-group col-lg-10">
                                                <button style={{ width: "200px" }} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    {this.state.author} <span className="caret"></span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label for="comment" className="control-label col-lg-2">Publisher</label>
                                            <div className="btn-group col-lg-10">
                                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" style={{ width: "200px" }}>
                                                    {this.state.publisher} <span className="caret"></span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label for="comment" className="control-label col-lg-2">Image upload </label>
                                            <div className="col-lg-10">
                                                <input className="form-control " type="file" id="ccomment" name="comment" required
                                                    onChange={e => this.handleChangeImg(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label for="comment" className="control-label col-lg-2">Image</label>
                                            <div className="col-lg-10">
                                                <img src={this.state.book && this.state.book.img ? this.state.book.img : ""} style={{ maxWidth: "300px" }} />
                                            </div>
                                        </div>
                                        {this.renderBtnSubmit()}
                                    </form>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </section >
        )
    }
}
export default Book