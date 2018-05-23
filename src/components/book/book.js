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
                    ><Link to='/'>&laquo;</Link></li>
                    {
                        this.state.pagination.map((element, index) => {
                            if (this.props.page === element) {
                                return (
                                    <li className="active" onClick={() => this.props.setPage(element)}><Link to='/' >{element}</Link></li>
                                )
                            } else {
                                return (
                                    <li onClick={() => this.props.setPage(element)}><Link to='/' >{element}</Link></li>
                                )
                            }

                        })}
                    <li onClick={() => this.props.nextPage()}
                    ><Link to='/'>&raquo;</Link></li>
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
                <div class="form-group">
                    <div class="col-lg-offset-2 col-lg-10">
                        <button class="btn btn-primary" type="submit">Add</button>
                        <button class="btn btn-primary" disabled type="button">Update</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div class="form-group">
                    <div class="col-lg-offset-2 col-lg-10">
                        <button class="btn btn-primary" disabled type="submit">Add</button>
                        <button class="btn btn-primary" type="button">Update</button>
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
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="page-header"><i class="fa fa-table"></i> Table</h3>
                        <ol class="breadcrumb">
                            <li><i class="fa fa-home"></i><Link to='/'>Home</Link></li>
                            <li><i class="fa fa-table"></i>Table</li>
                            <li><i class="fa fa-th-list"></i>Book Manager</li>
                        </ol>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <section class="panel">
                            <header class="panel-heading">
                                Advanced Table
              </header>
                            <table class="table table-striped table-advance table-hover">
                                <tbody>
                                    <tr>
                                        <th><i class="icon_profile"></i> Name</th>
                                        <th><i class="icon_calendar"></i> Date</th>
                                        <th><i class="icon_mail_alt"></i> Price</th>
                                        <th><i class="icon_pin_alt"></i> describe</th>
                                        <th><i class="icon_cogs"></i> Action</th>
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
                                                        <div class="btn-group">
                                                            <a onClick={() => this.setState({
                                                                book: element,
                                                                curr: "update"
                                                            })}
                                                                class="btn btn-success" ><i class="icon_check_alt2"></i></a>
                                                            <a onClick={() => this.props.deleteBook(element._id)} class="btn btn-danger" ><i class="icon_close_alt2"></i></a>
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
                <div class="row">
                    <div class="col-lg-12">
                        <section class="panel">
                            <header class="panel-heading">
                                Form validations
              </header>
                            <div class="panel-body">
                                <div class="form">
                                    <form class="form-validate form-horizontal" id="feedback_form" method="get" action="">
                                        <div class="form-group ">
                                            <label for="cname" class="control-label col-lg-2">Name <span class="required">*</span></label>
                                            <div class="col-lg-10">
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
                                                    class="form-control" id="cname" name="fullname" minlength="5" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="cemail" class="control-label col-lg-2">Date<span class="required">*</span></label>
                                            <div class="col-lg-10">
                                                <input
                                                    value={this.state.book && this.state.book.release_date ? this.state.book.release_date.slice(0, 10) : null}
                                                    onChange={(e) => this.setState({
                                                        book: {
                                                            ...this.state.book,
                                                            release_date: e.target.value
                                                        }
                                                    })}
                                                    class="form-control " id="cemail" type="date" name="email" required />
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="curl" class="control-label col-lg-2">Price</label>
                                            <div class="col-lg-10">
                                                <input
                                                    value={this.state.book && this.state.book.price ? this.state.book.price : null}
                                                    onChange={(e) => this.setState({
                                                        book: {
                                                            ...this.state.book,
                                                            price: e.target.value
                                                        }
                                                    })}
                                                    class="form-control " id="curl" type="text" name="url" />
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="cname" class="control-label col-lg-2">Describe <span class="required">*</span></label>
                                            <div class="col-lg-10">
                                                <input
                                                    value={this.state.book && this.state.book.describe ? this.state.book.describe : null}
                                                    onChange={(e) => this.setState({
                                                        book: {
                                                            ...this.state.book,
                                                            describe: e.target.value
                                                        }
                                                    })}
                                                    class="form-control" id="subject" name="subject" minlength="5" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="comment " class="control-label col-lg-2">Category</label>
                                            <div class="btn-group col-lg-10">
                                                <button style={{ width: "200px" }} type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    {this.state.category}  <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu" role="menu">
                                                    {this.renderMenuCategory()}
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="comment" class="control-label col-lg-2">Author</label>
                                            <div class="btn-group col-lg-10">
                                                <button style={{ width: "200px" }} type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    {this.state.author} <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="comment" class="control-label col-lg-2">Publisher</label>
                                            <div class="btn-group col-lg-10">
                                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" style={{ width: "200px" }}>
                                                    {this.state.publisher} <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="comment" class="control-label col-lg-2">Image upload </label>
                                            <div class="col-lg-10">
                                                <input class="form-control " type="file" id="ccomment" name="comment" required
                                                    onChange={e => this.handleChangeImg(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="comment" class="control-label col-lg-2">Image</label>
                                            <div class="col-lg-10">
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