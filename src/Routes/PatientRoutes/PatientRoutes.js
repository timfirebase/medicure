import {Route} from "react-router-dom";
import Layout from "../../components/UI/Layout/Layout";
import PatientHome from "../../components/Patient/PatientHome";
import PatientAppointments from "../../components/Patient/PatientAppointments";
import BookAppointment from "../../components/Patient/BookAppointment";
import React from "react";
import UpdateProfile from "../../components/UI/UpdateProfile/UpdateProfile";

const tiles = [
    {path:'/bookAppointment',heading:'Book Appointments'},
    {path:'/viewAppointment',heading:'View Appointments'},
    {path:'/updatePatientProfile',heading:'Manage Profile'},
]

let patientRoutes =  [
    <Route path="/patientHome">
        <Layout>
            <PatientHome/>
        </Layout>
    </Route>,
    <Route path="/bookAppointment">
        <Layout tiles={tiles}>
            <BookAppointment/>
        </Layout>
    </Route>,
    <Route path="/viewAppointment">
        <Layout tiles={tiles}>
            <PatientAppointments/>
        </Layout>
    </Route>,
    <Route path="/updatePatientProfile">
        <Layout tiles={tiles}>
            <UpdateProfile/>
        </Layout>
    </Route>
];

export default patientRoutes;