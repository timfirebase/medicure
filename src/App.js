import React, {useEffect} from "react";
import { Switch, Redirect } from 'react-router-dom';
import PatientRoutes from "./Routes/PatientRoutes/PatientRoutes";
import AdminRoutes from "./Routes/AdminRoutes/AdminRoutes";
import AuthRoutes from "./Routes/AuthRoutes/AuthRoutes";
import DoctorRoutes from "./Routes/DoctorRoutes/DoctorRoutes";
import * as authActions from "./store/actions/AuthActions";
import {connect} from "react-redux";

function App(props) {

    useEffect(() => {
        props.checkAuthChange();
    },[]);

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

const mapStateToProps = state => {
    return {
        user: state.authRdcr.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        checkAuthChange: () => dispatch(authActions.checkAuthChange())
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
