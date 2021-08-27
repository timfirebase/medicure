import React from "react"
import SignUp from "./components/SignUp/SignUp";
import Layout from "./components/UI/Layout/Layout";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "./components/Login/Login";
import PatientHome from "./components/Patient/PatientHome";
import bgImg from "./assets/images/bg.jpg";
import PatientAppointments from "./components/Patient/PatientAppointments";
import BookAppointment from "./components/Patient/BookAppointment";
import AdminHome from "./components/Admin/AdminHome";

function App() {
    const sectionStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }
    return (
      <>
              <Switch>
                  <Route path="/signup">
                      <Layout sectionStyle={sectionStyle}>
                          <div style={{marginRight: "10%"}}>
                              <SignUp roleId={"patient"}/>
                          </div>
                      </Layout>
                  </Route>
                  <Route path="/patientHome">
                      <Layout>
                         <PatientHome/>
                      </Layout>
                  </Route>
                  <Route path="/adminHome">
                      <Layout>
                          <AdminHome/>
                      </Layout>
                  </Route>
                  <Route path="/viewAppointment">
                      <Layout>
                          <PatientAppointments/>
                      </Layout>
                  </Route>
                  <Route path="/bookAppointment">
                      <Layout>
                          <BookAppointment/>
                      </Layout>
                  </Route>
                  <Route path="/" exact >
                      <Layout sectionStyle={sectionStyle}>
                          <div style={{marginRight: "10%"}}>
                              <Login/>
                          </div>
                      </Layout>
                  </Route>
                  <Redirect to="/" />
              </Switch>
      </>
  )
}
export default App;
