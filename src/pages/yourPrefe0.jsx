import React from "react";
import { Link } from "react-router-dom";
import { images, Navigation } from "../config";
import { CyanButton, Chip } from "../components";

export const YourPrefe0 = () => {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <img className="login-logo" src={images.logo} alt="main logo" />

                <form className="register-main-form">
                    <h1 className="login-heading">Your Prefercences</h1>
                    <p className="logo-subheading">
                        Let us know your preference so you can have a best date.
                    </p>
                    <div className="bi-chip-comp">
                        <p className="bi-chip-head">Outdoor Activities</p>
                        <div className="yourPref-chip-holder">
                            <Chip
                                classname="yp-chip-all"
                                name="Select All"
                                text="Select All"
                            />
                            <Chip name="Hiking" text="Hiking" />
                            <Chip name="Cycling" text="Cycling" />
                            <Chip name="Rock Climbing" text="Rock Climbing" />
                            <Chip name="Fishing" text="Fishing" />
                            <Chip name="Outdoor Golf" text="Outdoor Golf" />
                            <Chip
                                name="Outdoor Ice Skating,"
                                text="Outdoor Ice Skating,"
                            />
                            <Chip name="Amusement Park" text="Amusement Park" />
                            <Chip name="Picnic" text="Picnic" />
                            <Chip name="Winery" text="Winery" />
                            <Chip
                                classname="yp-chip-more"
                                name="See More"
                                text="See More"
                            />
                        </div>
                    </div>
                    <div className="bi-chip-comp">
                        <p className="bi-chip-head">Indoor Activities</p>
                        <div className="yourPref-chip-holder">
                            <Chip
                                classname="yp-chip-all"
                                name="Select All1"
                                text="Select All"
                            />
                            <Chip name="Cinema" text="Cinema" />
                            <Chip name="Cycling" text="Cycling" />
                            <Chip name="Indoor Golf" text="Indoor Golf" />
                            <Chip name="Swimming" text="Swimming" />
                            <Chip name="Gym" text="Gym" />
                            <Chip name="Spa" text="Spa" />
                            <Chip name="Indoor Golf" text="Indoor Golf" />
                            <Chip name="Darts" text="Darts" />
                            <Chip name="Arcade" text="Arcade" />
                            <Chip name="Ping Pong" text="Ping Pong" />
                            <Chip name="Shuffle Board" text="Shuffle Board" />
                            <Chip
                                classname="yp-chip-more"
                                name="See More1"
                                text="See More"
                            />
                        </div>
                    </div>
                    <div className="bi-chip-comp">
                        <p className="bi-chip-head">Restaurant Types</p>
                        <div className="yourPref-chip-holder">
                            <Chip
                                classname="yp-chip-all"
                                name="Select All2"
                                text="Select All"
                            />
                            <Chip name="Chinese" text="Chinese" />
                            <Chip name="Greek" text="Greek" />
                            <Chip name="African" text="African" />
                            <Chip name="Mexican" text="Mexican" />
                            <Chip name="Swedish" text="Swedish" />
                            <Chip name="Latvian" text="Latvian" />
                            <Chip name="Italian" text="Italian" />
                            <Chip name="Thai" text="Thai" />
                            <Chip name="Jewish" text="Jewish" />
                            <Chip name="Polish" text="Polish" />
                            <Chip name="French" text="French" />
                            <Chip
                                classname="yp-chip-more"
                                name="See More2"
                                text="See More"
                            />
                        </div>
                    </div>
                    <Link to={Navigation.SOON}>
                        <CyanButton
                            text="Next (3/3)"
                            classname="create-pass-cyan-button"
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
};
