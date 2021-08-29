import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import PatientRoutes from "./Routes/PatientRoutes/PatientRoutes";
import AdminRoutes from "./Routes/AdminRoutes/AdminRoutes";
import AuthRoutes from "./Routes/AuthRoutes/AuthRoutes";

function App() {
    return (
      <>
          <Switch>
              {PatientRoutes}
              {AdminRoutes}
              {AuthRoutes}
              <Redirect to="/" />
          </Switch>
      </>
  )
}
export default App;
