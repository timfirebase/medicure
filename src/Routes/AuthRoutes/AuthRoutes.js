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

export default [
    <Route path="/signup">
        <Layout sectionStyle={sectionStyle}>
            <div style={{marginRight: "10%"}}>
                <SignUp roleId={"patient"}/>
            </div>
        </Layout>
    </Route>,
    <Route path="/" exact >
        <Layout sectionStyle={sectionStyle}>
            <div style={{marginRight: "10%"}}>
                <Login/>
            </div>
        </Layout>
    </Route>
];