import {Route} from "react-router-dom";
import Layout from "../../components/UI/Layout/Layout";
import AdminHome from "../../components/Admin/AdminHome";
import ViewDoctors from "../../components/Admin/ViewDoctors";
import ViewPatients from "../../components/Admin/ViewPatient";
import ViewAppointment from "../../components/Admin/ViewAppointment";
import ManageDoctors from "../../components/Admin/ManageDoctors";
import ManageAdmins from "../../components/Admin/ManageAdmins";
import ViewReports from "../../components/Admin/ViewReports";
import React from "react";


export default [
    <Route path="/adminHome">
        <Layout>
            <AdminHome/>
        </Layout>
    </Route>,
    <Route path="/viewDoctor">
        <Layout tiles={[
            {path:'/viewPatient',heading:'View Patients'},
            {path:'/viewAllAppointments',heading:'View Appointments'},
            {path:'/manageDoctor',heading:'Manage Doctors'},
            {path:'/manageAdmin',heading:'Manage Admin'},
            {path:'/viewReports',heading:'View Reports'}
        ]}>
            <ViewDoctors/>
        </Layout>
    </Route>,
    <Route path="/viewPatient">
        <Layout tiles={[
            {path:'/viewDoctor',heading:'View Doctors'},
            {path:'/viewAllAppointments',heading:'View Appointments'},
            {path:'/manageDoctor',heading:'Manage Doctors'},
            {path:'/manageAdmin',heading:'Manage Admin'},
            {path:'/viewReports',heading:'View Reports'}
        ]}>
            <ViewPatients/>
        </Layout>
    </Route>,
    <Route path="/viewAllAppointments">
        <Layout tiles={[
            {path:'/viewDoctor',heading:'View Doctors'},
            {path:'/viewPatient',heading:'View Patients'},
            {path:'/manageDoctor',heading:'Manage Doctors'},
            {path:'/manageAdmin',heading:'Manage Admin'},
            {path:'/viewReports',heading:'View Reports'}
        ]}>
            <ViewAppointment/>
        </Layout>
    </Route>,
    <Route path="/manageDoctor">
        <Layout tiles={[
            {path:'/viewDoctor',heading:'View Doctors'},
            {path:'/viewPatient',heading:'View Patients'},
            {path:'/viewAllAppointments',heading:'View Appointments'},
            {path:'/manageAdmin',heading:'Manage Admin'},
            {path:'/viewReports',heading:'View Reports'}
        ]}>
            <ManageDoctors/>
        </Layout>
    </Route>,
    <Route path="/manageAdmin">
        <Layout tiles={[
            {path:'/viewDoctor',heading:'View Doctors'},
            {path:'/viewPatient',heading:'View Patients'},
            {path:'/viewAllAppointments',heading:'View Appointments'},
            {path:'/manageDoctor',heading:'Manage Doctors'},
            {path:'/viewReports',heading:'View Reports'}
        ]}>
            <ManageAdmins/>
        </Layout>
    </Route>,
    <Route path="/viewReports">
        <Layout tiles={[
            {path:'/viewDoctor',heading:'View Doctors'},
            {path:'/viewPatient',heading:'View Patients'},
            {path:'/viewAllAppointments',heading:'View Appointments'},
            {path:'/manageDoctor',heading:'Manage Doctors'},
            {path:'/manageAdmin',heading:'Manage Admin'}
        ]}>
            <ViewReports/>
        </Layout>
    </Route>
];