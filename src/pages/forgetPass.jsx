import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../config";
import { images } from "../config";
import { Input, CyanButton, SuccessModal } from "../components";

export const ForgetPass = () => {
    const navigation_1 = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        navigation_1(Navigation.SOON);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        openModal();
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <img className="login-logo" src={images.logo} alt="main logo" />
                <img
                    className="login-logoGroup"
                    src={images.group}
                    alt="group-logo"
                />

                <form
                    className="forget-pass-main-form"
                    onSubmit={submitHandler}
                >
                    <h1 className="login-heading">Forgot Password?</h1>
                    <p className="logo-subheading">
                        Enter the email address associated with your account and
                        we'll send you a password reset link.
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
                    </div>
                    <CyanButton
                        text="Send Link"
                        classname="forget-pass-cyan-button"
                        type="submit"
                    />
                </form>
                <SuccessModal
                    label={"Success"}
                    message="We have successfully sent your password reset link on your email address. Please open the link from your email to reset your password."
                    icon={images.check_cyan_icon}
                    open={showModal}
                    closeModel={closeModal}
                />
            </div>
        </div>
    );
};
