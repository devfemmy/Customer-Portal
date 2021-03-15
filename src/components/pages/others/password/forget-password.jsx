import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../login/login.css';

import Breadcrumb from '../../../common/breadcrumb';

function ForgetPassword() {
    return (
        <>
            <Helmet>
                <title>LOGIN PAGE </title>
            </Helmet>

            <h1 className="d-none">Customer Portal - Forgot Password Page</h1>

            <div className="main">
                <div className="">
                <Breadcrumb current="Forgot Password" />
                    <div className="row">

                        <div className="col-md-6 col-lg-6 forget-bg">
                        </div>
                        <div className="col-md-6 col-lg-6 login-container">
                            <div className="heading forgotpassword">
                                <h4 className="title">Forgot Password</h4>
                                <p>Do a password reset here.</p>
                            </div>

                            <form className= "form-group" action="#">
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input type="email" className="form-control" placeholder="Email Address" required />
                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary">Reset Password</button>
                                    <Link style= {{visibility: 'hidden'}} to={ `${ process.env.PUBLIC_URL }/pages/password` } className="forget-pass"> Forgot your password?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <div className="mb-5"></div> */}
            </div>
        </>
    )
}

export default ForgetPassword;