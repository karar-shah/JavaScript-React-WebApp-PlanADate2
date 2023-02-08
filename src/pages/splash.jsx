import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../config";
import { images } from "../config";

export const Splash = () => {
    return (
        <div className="splash-wrapper">
            <div className="splash-container">
                <Link to={Navigation.FEATURE0}>
                    <div className="splash-images">
                        <img
                            className="splash-logo"
                            src={images.logo_cyan}
                            alt="main logo"
                        />
                        <img
                            className="splash-group"
                            src={images.group_cyan}
                            alt="group logo"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};
