import {Route} from "react-router-dom";
import Layout from "../../components/UI/Layout/Layout";
import React from "react";
import DoctorHome from "../../components/Doctor/DoctorHome";
import ViewDoctorAppointments from "../../components/Doctor/ViewDoctorAppointments";
import ManageWallet from "../../components/Doctor/ManageWallet";

const tiles = [
    {path:'/ViewDoctorAppointments',heading:'View Appointments'},
    {path:'/ManageDoctorProfile',heading:'Manage Profile'},
    {path:'/ManageWallet',heading:'Manage Wallet'},
]

export default [
    <Route path="/doctorHome">
        <Layout>
            <DoctorHome/>
        </Layout>
    </Route>,
    <Route path="/ViewDoctorAppointments">
        <Layout tiles={tiles}>
            <ViewDoctorAppointments/>
        </Layout>
    </Route>,
    <Route path="/ManageWallet">
        <Layout tiles={tiles}>
            <ManageWallet/>
        </Layout>
    </Route>
];