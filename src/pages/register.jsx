import React from "react";
import { Link } from "react-router-dom";
import { images, Navigation } from "../config";
import { Input, CyanButton, WhiteButton } from "../components";

export const Register = () => {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <img className="login-logo" src={images.logo} alt="main logo" />
                <form className="register-main-form">
                    <h1 className="login-heading">Create An Account.</h1>
                    <p className="logo-subheading">
                        Please enter below details to get registered.
                    </p>
                    <div className="login-input-box">
                        <div className="split-box">
                            <div className="split-inputs1">
                                <label
                                    className="register-label-name"
                                    htmlFor="firstname"
                                >
                                    First Name
                                </label>
                                <Input
                                    classname="login-input-dob"
                                    type="text"
                                    name="firstname"
                                />
                            </div>
                            <div className="split-inputs2">
                                <label
                                    className="register-label-name"
                                    htmlFor="lastname"
                                >
                                    Last Name
                                </label>
                                <Input
                                    classname="login-input-dob"
                                    type="text"
                                    name="lastname"
                                />
                            </div>
                        </div>
                        <label className="register-label-dob" htmlFor="dob">
                            Date of Birth
                        </label>
                        <Input
                            classname="login-input-dob"
                            type="date"
                            name="dob"
                        />
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
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <Input
                            classname="login-input-password"
                            type="text"
                            name="username"
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
                                Accept{" "}
                                <a
                                    className="register-a-terms"
                                    href="javascript:void(0)"
                                >
                                    Terms & Conditions
                                </a>
                            </label>
                        </div>
                    </div>

                    <Link to={Navigation.CREATEPASSWORD}>
                        <CyanButton
                            text="Register"
                            classname="login-cyan-button"
                        />
                    </Link>
                    <hr className="login-horizontal-line" />
                    <a className="login-a-noaccount" href="javascript:void(0)">
                        Already have an account??
                    </a>
                    <Link to="/login">
                        <WhiteButton
                            text="Login"
                            classname="login-white-button"
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
};
