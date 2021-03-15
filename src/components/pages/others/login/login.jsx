import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './login.css';

import Breadcrumb from '../../../common/breadcrumb';

function Login() {
    return (
        <>
            <Helmet>
                <title>LOGIN PAGE </title>
            </Helmet>

            <h1 className="d-none">Customer Portal - Login Page</h1>

            <div className="main">
                <div className="">
                <Breadcrumb current="Login" />
                    <div className="row">

                        <div className="col-md-6 col-lg-6 login-bg">
                        </div>
                        <div className="col-md-6 col-lg-6 login-container">
                            <div className="heading">
                                <h4 className="title">Hello, Let's get you started</h4>
                                <p>If you have an account with us, please log in.</p>
                            </div>

                            <form className= "form-group" action="#">
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input type="email" className="form-control" placeholder="Email Address" required />
                                <label htmlFor="email">
                                   Password
                                </label>
                                <input type="password" className="form-control" placeholder="Password" required />

                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary">LOGIN</button>
                                    <Link to={ `${ process.env.PUBLIC_URL }/pages/password` } className="forget-pass"> Forgot your password?</Link>
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

export default Login;