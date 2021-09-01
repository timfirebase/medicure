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

const tiles = [
    {path:'/viewPatient',heading:'View Patients'},
    {path:'/viewAllAppointments',heading:'View Appointments'},
    {path:'/manageDoctor',heading:'Manage Doctors'},
    {path:'/manageAdmin',heading:'Manage Admins'},
]

export default [
    <Route path="/adminHome">
        <Layout>
            <AdminHome/>
        </Layout>
    </Route>,
    <Route path="/viewDoctor">
        <Layout tiles={tiles}>
            <ViewDoctors/>
        </Layout>
    </Route>,
    <Route path="/viewPatient">
        <Layout tiles={tiles}>
            <ViewPatients/>
        </Layout>
    </Route>,
    <Route path="/viewAllAppointments">
        <Layout tiles={tiles}>
            <ViewAppointment/>
        </Layout>
    </Route>,
    <Route path="/manageDoctor">
        <Layout tiles={tiles}>
            <ManageDoctors/>
        </Layout>
    </Route>,
    <Route path="/manageAdmin">
        <Layout tiles={tiles}>
            <ManageAdmins/>
        </Layout>
    </Route>,
    <Route path="/viewReports">
        <Layout tiles={tiles}>
            <ViewReports/>
        </Layout>
    </Route>
];