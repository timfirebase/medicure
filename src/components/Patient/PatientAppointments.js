import React, {useEffect} from "react";
import * as PatientActions from "../../store/actions/PatientActions";
import {connect} from "react-redux";
import AppointmentGrid from "../UI/Grid/AppointmentGrid";
import Swal from "sweetalert2";

const PatientAppointments = (props) => {

    useEffect(()=>{
        if(props.patient) {
            props.getAppointmentsByPatientId(props.patient.id);
        }
    },[]);

    const onCancelClick = (appointmentId) => {
        Swal.fire({
            title: 'Please wait...',
            html: '',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });
        props.onCancelAppointment(appointmentId,"cancelled");
    }

    if(props.appointmentCancelled) {
        Swal.close();
        Swal.fire('Appointment Cancelled!','','success');
        props.resetAppointmentCancelStatus();
    }

    return (
        <>
            <AppointmentGrid appointments={props.appointments} role={props.patient? props.patient.role : ""} onCancelClick={onCancelClick}/>
        </>
    );
}

const mapStateToProps = state => {
    return {
        appointments : state.patientRdcr.appointments,
        appointmentCancelled : state.patientRdcr.appointmentCancelled,
        patient: state.authRdcr.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAppointmentsByPatientId: (patientId) => dispatch(PatientActions.getPatientAppointmentsInit(patientId)),
        onCancelAppointment: (appointmentId,status) => dispatch(PatientActions.cancelPatientAppointmentInit(appointmentId,status)),
        resetAppointmentCancelStatus: () => dispatch(PatientActions.resetAppointmentCancelStatus())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PatientAppointments);