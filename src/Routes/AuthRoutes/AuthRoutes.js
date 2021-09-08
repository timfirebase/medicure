import {Route} from "react-router-dom";
import Layout from "../../components/UI/Layout/Layout";
import SignUp from "../../components/SignUp/SignUp";
import React from "react";
import Login from "../../components/Login/Login";
import bgImg from "../../assets/images/bg.jpg";

const sectionStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
}

let authRoutes = [
    <Route path="/signup">
        <Layout sectionStyle={sectionStyle}>
            <div className="row" style={{marginRight: "10%"}}>
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <SignUp roleId={"patient"} mode={"Signup"} label={"Sign Up"}/>
                </div>
            </div>
        </Layout>
    </Route>,
    <Route path="/" exact>
        <Layout sectionStyle={sectionStyle}>
            <div style={{marginRight: "10%"}}>
                <Login/>
            </div>
        </Layout>
    </Route>
];

export default authRoutes;