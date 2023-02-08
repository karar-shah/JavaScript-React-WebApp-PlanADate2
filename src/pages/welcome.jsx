import React from "react";
import { Link } from "react-router-dom";
import { images } from "../config";
import { CyanButton, WhiteButton } from "../components";

export const Welcome = () => {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <img className="login-logo" src={images.logo} alt="main logo" />
                <img
                    className="login-logoGroup"
                    src={images.group}
                    alt="group-logo"
                />

                <form className="welcome-main-form">
                    <h1 className="welcome-heading">
                        How would you like to proceed?
                    </h1>
                    <Link to="/register">
                        <CyanButton
                            text="Register"
                            classname="welcome-cyan-button"
                        />
                    </Link>
                    <Link to="/login">
                        <WhiteButton
                            text="Login"
                            classname="welcome-white-button"
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
};
