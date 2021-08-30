import {Route} from "react-router-dom";
import Layout from "../../components/UI/Layout/Layout";
import React from "react";
import DoctorHome from "../../components/Doctor/DoctorHome";
import ViewDoctorAppointments from "../../components/Doctor/ViewDoctorAppointments";

export default [
    <Route path="/doctorHome">
        <Layout>
            <DoctorHome/>
        </Layout>
    </Route>,
    <Route path="/ViewDoctorAppointments">
        <Layout>
            <ViewDoctorAppointments/>
        </Layout>
    </Route>
];