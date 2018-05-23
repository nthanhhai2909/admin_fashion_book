import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Book extends Component {
    constructor() {
        super()
        this.state = {
            pagination: [1, 2]
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
    renderTableBook = () => {
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
                                        <th><i class="icon_profile"></i> Full Name</th>
                                        <th><i class="icon_calendar"></i> Date</th>
                                        <th><i class="icon_mail_alt"></i> Email</th>
                                        <th><i class="icon_pin_alt"></i> City</th>
                                        <th><i class="icon_mobile"></i> Mobile</th>
                                        <th><i class="icon_cogs"></i> Action</th>
                                    </tr>
                                    <tr>
                                        <td>Angeline Mcclain</td>
                                        <td>2004-07-06</td>
                                        <td>dale@chief.info</td>
                                        <td>Rosser</td>
                                        <td>176-026-5992</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sung Carlson</td>
                                        <td>2011-01-10</td>
                                        <td>ione.gisela@high.org</td>
                                        <td>Robert Lee</td>
                                        <td>724-639-4784</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bryon Osborne</td>
                                        <td>2006-10-29</td>
                                        <td>sol.raleigh@language.edu</td>
                                        <td>York</td>
                                        <td>180-456-0056</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dalia </td>
                                        <td>2011-12-15</td>
                                        <td>angeline.frieda@thick.com</td>
                                        <td>Alton</td>
                                        <td>690-601-1922</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>Selina Fitzgerald</td>
                                        <td>2003-01-06</td>
                                        <td>moshe.mikel@parcelpart.info</td>
                                        <td>Waelder</td>
                                        <td>922-810-0915</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Abraham Avery</td>
                                        <td>2006-07-14</td>
                                        <td>harvey.jared@pullpump.org</td>
                                        <td>Harker Heights</td>
                                        <td>511-175-7115</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Caren Mcdowell</td>
                                        <td>2002-03-29</td>
                                        <td>valeria@hookhope.org</td>
                                        <td>Blackwell</td>
                                        <td>970-147-5550</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Owen Bingham</td>
                                        <td>2013-04-06</td>
                                        <td>thomas.christopher@firstfish.info</td>
                                        <td>Rule</td>
                                        <td>934-118-6046</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ahmed Dean</td>
                                        <td>2008-03-19</td>
                                        <td>lakesha.geri.allene@recordred.com</td>
                                        <td>Darrouzett</td>
                                        <td>338-081-8817</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mario Norris</td>
                                        <td>2010-02-08</td>
                                        <td>mildred@hour.info</td>
                                        <td>Amarillo</td>
                                        <td>945-547-5302</td>
                                        <td>
                                            <div class="btn-group">
                                                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                            </div>
                                        </td>
                                    </tr>
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
                                            <label for="cname" class="control-label col-lg-2">Full Name <span class="required">*</span></label>
                                            <div class="col-lg-10">
                                                <input class="form-control" id="cname" name="fullname" minlength="5" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="cemail" class="control-label col-lg-2">E-Mail <span class="required">*</span></label>
                                            <div class="col-lg-10">
                                                <input class="form-control " id="cemail" type="email" name="email" required />
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="curl" class="control-label col-lg-2">Website</label>
                                            <div class="col-lg-10">
                                                <input class="form-control " id="curl" type="url" name="url" />
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="cname" class="control-label col-lg-2">Subject <span class="required">*</span></label>
                                            <div class="col-lg-10">
                                                <input class="form-control" id="subject" name="subject" minlength="5" type="text" required />
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <label for="ccomment" class="control-label col-lg-2">Feedback</label>
                                            <div class="col-lg-10">
                                                <textarea class="form-control " id="ccomment" name="comment" required></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-lg-offset-2 col-lg-10">
                                                <button class="btn btn-primary" type="submit">Save</button>
                                                <button class="btn btn-default" type="button">Cancel</button>
                                            </div>
                                        </div>
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