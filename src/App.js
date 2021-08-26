import React from "react"
import SignUp from "./components/SignUp/SignUp";
import Layout from "./components/UI/Layout/Layout";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "./components/Login/Login";
import PatientHome from "./components/Patient/PatientHome";
import bgImg from "./assets/images/bg.jpg";
import PatientAppointments from "./components/Patient/PatientAppointments";

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
                  <Route path="/login">
                      <Layout sectionStyle={sectionStyle}>
                          <div style={{marginRight: "10%"}}>
                              <Login/>
                          </div>
                      </Layout>
                  </Route>
                  <Route path="/patientHome">
                      <Layout>
                         <PatientHome/>
                      </Layout>
                  </Route>
                  <Route path="/viewAppointment">
                      <Layout>
                          <PatientAppointments/>
                      </Layout>
                  </Route>
                  <Route path="/" exact >
                      <Layout sectionStyle={sectionStyle}>
                          <div style={{marginRight: "10%"}}>
                             <SignUp roleId={"patient"}/>
                          </div>
                      </Layout>
                  </Route>
                  <Redirect to="/" />
              </Switch>
      </>
  )
}
export default App;
