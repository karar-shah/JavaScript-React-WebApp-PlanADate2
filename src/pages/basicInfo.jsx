import React from "react";
import { Link } from "react-router-dom";
import { images, Navigation } from "../config";
import { CyanButton, Chip } from "../components";

export const BasicInfo = () => {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <img className="login-logo" src={images.logo} alt="main logo" />
                <img
                    className="login-logoGroup"
                    src={images.group}
                    alt="group-logo"
                />

                <form className="bi-main-form">
                    <h1 className="login-heading">Tell us About Yourself</h1>
                    <p className="logo-subheading">
                        Fill out below details before planning your date.
                    </p>
                    <div className="bi-chip-comp">
                        <p className="bi-chip-head">Gender</p>
                        <div className="bi-chip-holder">
                            <Chip name="male" text="Male" />
                            <Chip name="female" text="Female" />
                            <Chip name="other" text="Other" />
                        </div>
                    </div>
                    <div className="bi-chip-comp">
                        <p className="bi-chip-head">Occupation</p>
                        <div className="bi-chip-holder">
                            <Chip name="studen" text="Studen" />
                            <Chip name="working" text="Working" />
                            <Chip name="other1" text="Other" />
                        </div>
                    </div>
                    <Link to={Navigation.YOURPREFE0}>
                        <CyanButton
                            text="Next (2/3)"
                            classname="create-pass-cyan-button"
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
};
