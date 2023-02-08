import React from "react";
import { Link } from "react-router-dom";
import { images, Navigation } from "../config";
import { Input, CyanButton, WhiteButton } from "../components";

export const CreatePass = () => {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <img className="login-logo" src={images.logo} alt="main logo" />
                <img
                    className="login-logoGroup"
                    src={images.group}
                    alt="group-logo"
                />

                <form className="create-pass-main-form">
                    <h1 className="login-heading">Secure Your Account.</h1>
                    <p className="logo-subheading">
                        Enter and confirm a password for your account.
                    </p>
                    <div className="login-input-box">
                        <label
                            className="login-label-password"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <Input
                            classname="login-input-email"
                            type="password"
                            name="password"
                        />
                        <label
                            className="create-pass-label-Cpassword"
                            htmlFor="Cpassword"
                        >
                            Confirm Password
                        </label>
                        <Input
                            classname="login-input-password"
                            type="password"
                            name="Cpassword"
                        />
                    </div>
                    <Link to={Navigation.BASICINFO}>
                        <CyanButton
                            text="Next (1/3)"
                            classname="create-pass-cyan-button"
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
};
