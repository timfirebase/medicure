import {Route} from "react-router-dom";
import Layout from "../../components/UI/Layout/Layout";
import PatientHome from "../../components/Patient/PatientHome";
import PatientAppointments from "../../components/Patient/PatientAppointments";
import BookAppointment from "../../components/Patient/BookAppointment";
import React from "react";

export default [
    <Route path="/patientHome">
        <Layout>
            <PatientHome/>
        </Layout>
    </Route>,
    <Route path="/bookAppointment">
        <Layout tiles={[
            {path:'/viewAppointment',heading:'View Appointments'},
            {path:'/managePatientProfile',heading:'Manage Profile'}
        ]}>
            <BookAppointment/>
        </Layout>
    </Route>,
    <Route path="/viewAppointment">
        <Layout tiles={[
            {path:'/bookAppointment',heading:'Book Appointments'},
            {path:'/managePatientProfile',heading:'Manage Profile'}
        ]}>
            <PatientAppointments/>
        </Layout>
    </Route>
];