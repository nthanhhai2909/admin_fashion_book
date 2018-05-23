import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Author extends Component {
    constructor() {
        super()
        this.state = {
            pagination: [],
            currname: null,
            name: null,
            id: null,
            noti: null
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.isadd === false) {
            this.setState({
                noti:'Please Change name'
            })
        }
        else {
            this.setState({
                noti:'',
                name: ''
            })
        }
        if(nextProps.isupdate === false) {
            this.setState({
                noti:'update fail'
            })
        }
        else {
            this.setState({
                noti:'',
                id:null
            })
        }
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
                                        <th><i className="icon_cogs"></i> Action</th>
                                    </tr>
                                    {
                                        this.props.author.map((element, index) => {
                                            return (
                                                <tr>
                                                    <td>{element.name}</td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <a onClick={() => this.setState({
                                                                currname: element.name,
                                                                name: element.name,
                                                                id: element._id
                                                            })}
                                                                className="btn btn-success" ><i className="icon_check_alt2"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
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
                                <div className="form-validate form-horizontal">
                                        <div className="form-group ">
                                            <label for="cname" className="control-label col-lg-2">Name <span className="required">*</span></label>
                                            <div className="col-lg-10">
                                                <input
                                                    onChange={e => {
                                                        this.setState({
                                                            name: e.target.value
                                                        })
                                                    }}
                                                    value={this.state.name}
                                                    className="form-control" id="cname" name="fullname" minlength="5" type="text" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-lg-offset-2 col-lg-10">
                                                <p>{this.state.noti}</p>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-lg-offset-2 col-lg-10">
                                                <button onClick={() => this.props.addAuthor(this.state.name)} className="btn btn-primary">Add</button>
                                                <button onClick={() => this.props.updateAuthor(this.state.id, this.state.name)}className="btn btn-primary" >Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                    </div>
                </div>
            </section >
        )
    }
}
export default Author