import React, {useEffect} from "react";
import * as PatientActions from "../../store/actions/PatientActions";
import {connect} from "react-redux";
import AppointmentGrid from "../UI/Grid/AppointmentGrid";

const PatientAppointments = (props) => {

    useEffect(()=>{
        if(props.patient) {
            props.getAppointmentsByPatientId(props.patient.id);
        }
    },[]);
    return (
        <>
            <AppointmentGrid appointments={props.appointments} role={props.patient? props.patient.role : ""}/>
        </>
    );
}

const mapStateToProps = state => {
    return {
        appointments : state.patientRdcr.appointments,
        patient: state.authRdcr.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAppointmentsByPatientId: (patientId) => dispatch(PatientActions.getPatientAppointmentsInit(patientId))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PatientAppointments);