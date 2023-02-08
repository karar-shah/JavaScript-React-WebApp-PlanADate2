import React from "react";
import { Link } from "react-router-dom";
import { images } from "../config";
import { Input, CyanButton, WhiteButton } from "../components";

export const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <img className="login-logo" src={images.logo} alt="main logo" />
                <img
                    className="login-logoGroup"
                    src={images.group}
                    alt="group-logo"
                />

                <form className="login-main-form">
                    <h1 className="login-heading">Login To Your Account</h1>
                    <p className="logo-subheading">
                        Please enter your login details.
                    </p>
                    <div className="login-input-box">
                        <label className="login-label-email" htmlFor="email">
                            Email
                        </label>
                        <Input
                            classname="login-input-email"
                            type="text"
                            name="email"
                        />
                        <label
                            className="login-label-password"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <Input
                            classname="login-input-password"
                            type="password"
                            name="password"
                        />
                    </div>
                    <div className="login-remember-container">
                        <div className="login-remember-form">
                            <Input
                                classname="login-input-remember"
                                type="checkbox"
                                name="remember"
                            />
                            <label
                                className="login-label-remember"
                                htmlFor="remember"
                            >
                                Remember Me
                            </label>
                        </div>
                        <a
                            className="login-a-forgetPass"
                            href="javascript:void(0)"
                        >
                            Forget Password?
                        </a>
                    </div>
                    <Link to="/login">
                        <CyanButton
                            text="Login"
                            classname="login-cyan-button"
                        />
                    </Link>
                    <hr className="login-horizontal-line" />
                    <a className="login-a-noaccount" href="javascript:void(0)">
                        Don't have an account?
                    </a>
                    <Link to="/register">
                        <WhiteButton
                            text="Register"
                            classname="login-white-button"
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
};
