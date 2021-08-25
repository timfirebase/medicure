import React from "react"
import SignUp from "./SignUp";
import Layout from "./UI/Layout";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "./Login";

function App() {
  return (
      <>
          <Layout>
              <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/" exact component={SignUp} />
                  <Redirect to="/" />
              </Switch>
          </Layout>
      </>
  )
}
export default App;
