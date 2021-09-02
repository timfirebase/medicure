import React, {useEffect} from "react";
import * as PatientActions from "../../store/actions/PatientActions";
import {connect} from "react-redux";
import AppointmentGrid from "../UI/Grid/AppointmentGrid";

const ViewAppointment = (props) => {

    useEffect(()=>{
        if(props.admin) {
            props.getAllAppointments();
        }
    },[]);
    return (
        <>
            <AppointmentGrid appointments={props.allAppointments} role={props.admin? props.admin.role : ""}/>
        </>
    );
}


const mapStateToProps = state => {
    return {
        allAppointments : state.patientRdcr.allAppointments,
        admin: state.authRdcr.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllAppointments: () => dispatch(PatientActions.getAllPatientAppointmentsInit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAppointment);