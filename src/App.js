import React from "react"
import SignUp from "./components/SignUp/SignUp";
import Layout from "./components/UI/Layout";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "./components/Login/Login";
import PatientHome from "./components/Patient/PatientHome";

function App() {
  return (
      <>
          <Layout>
              <Switch>
                  <Route path="/login">
                      <div style={{marginRight: "10%"}}>
                          <Login/>
                      </div>
                  </Route>
                  <Route path="/patientHome" component={PatientHome}/>
                  <Route path="/" exact >
                      <div style={{marginRight: "10%"}}>
                         <SignUp roleId={"patient"}/>
                      </div>
                  </Route>
                  <Redirect to="/" />
              </Switch>
          </Layout>
      </>
  )
}
export default App;
