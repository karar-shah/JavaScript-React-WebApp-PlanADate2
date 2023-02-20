import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import { Navigation } from "../config";
import { Login, Splash, Feature0, Feature1, Feature2 } from "../pages";
import { Feature3, Welcome, Register, CreatePass, BasicInfo } from "../pages";
import { YourPrefe0, ComingSoon, ForgetPass } from "../pages";

export const Routes = () => {
    return (
        <Router>
            <Route path={Navigation.SPLASH} element={<Splash />} />
            <Route path={Navigation.FEATURE0} element={<Feature0 />} />
            <Route path={Navigation.FEATURE1} element={<Feature1 />} />
            <Route path={Navigation.FEATURE2} element={<Feature2 />} />
            <Route path={Navigation.FEATURE3} element={<Feature3 />} />
            <Route path={Navigation.LOGIN} element={<Login />} />
            <Route path={Navigation.REGISTER} element={<Register />} />
            <Route path={Navigation.WELCOME} element={<Welcome />} />
            <Route path={Navigation.CREATEPASSWORD} element={<CreatePass />} />
            <Route path={Navigation.BASICINFO} element={<BasicInfo />} />
            <Route path={Navigation.YOURPREFE0} element={<YourPrefe0 />} />
            <Route path={Navigation.SOON} element={<ComingSoon />} />
            <Route path={Navigation.FORGETPASS} element={<ForgetPass />} />
        </Router>
    );
};
