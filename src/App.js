import React from "react";
import { Switch, Redirect } from 'react-router-dom';
import PatientRoutes from "./Routes/PatientRoutes/PatientRoutes";
import AdminRoutes from "./Routes/AdminRoutes/AdminRoutes";
import AuthRoutes from "./Routes/AuthRoutes/AuthRoutes";
import DoctorRoutes from "./Routes/DoctorRoutes/DoctorRoutes";

function App() {
    return (
      <>
          <Switch>
              {PatientRoutes}
              {DoctorRoutes}
              {AdminRoutes}
              {AuthRoutes}
              <Redirect to="/" />
          </Switch>
      </>
  )
}
export default App;
