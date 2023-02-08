import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../config";
import { images } from "../config";
import { ArrowButton } from "../components";

export const Feature1 = () => {
    return (
        <div className="splash-wrapper">
            <div className="splash-container">
                <div className="splash-images">
                    <div className="splash-img-mini-container">
                        <img
                            className="welcome-logo"
                            src={images.logo_welcome}
                            alt="main logo"
                        />
                        <h1 className="feature-heading">Feature Name Here 1</h1>
                        <p className="feature-subheading">
                            Mauris fermentum justo eu finibus blandit. Maecenas
                            congue luctus dolor.
                        </p>

                        <div className="feature-tiny-boxes">
                            <div className="feature-grey-box"></div>
                            <div className="feature-blue-box"></div>
                            <div className="feature-grey-box"></div>
                            <div className="feature-grey-box"></div>
                        </div>
                        <Link to={Navigation.FEATURE2}>
                            <ArrowButton classname="arrow-button" />
                        </Link>
                    </div>
                    <img
                        className="splash-group"
                        src={images.group_light}
                        alt="group logo"
                    />
                </div>
            </div>
        </div>
    );
};
