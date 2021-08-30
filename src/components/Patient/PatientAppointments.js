import React, {useEffect} from "react";
import Grid from "../UI/Grid/Grid";
import * as PatientActions from "../../store/actions/PatientActions";
import {connect} from "react-redux";

const columns = [
    {
        field: 'id',
        headerName: 'Sr No.',
        headerAlign: 'center',
        width: 120
    },
    {
        field: 'patientName',
        headerName: 'Patient Name',
        headerAlign: 'center',
        width: 180
    },
    {
        field: 'symptoms',
        headerName: 'Symptoms',
        headerAlign: 'center',
        width: 200
    },
    {
        field: 'doctorName',
        headerName: 'Doctor Name',
        headerAlign: 'center',
        width: 200
    },
    {
        field: 'availability',
        headerName: 'Doctor Availability',
        headerAlign: 'center',
        width: 300
    },
    {
        field: 'doctorEmail',
        headerName: 'Doctor Email',
        headerAlign: 'center',
        width: 180
    }
];

const PatientAppointments = (props) => {

    useEffect(()=>{
        if(props.patient) {
            props.getAppointmentsByPatientId(props.patient.id);
        }
    },[]);


    let grid = '';

    if(props.appointments) {
        const rows = [];
        props.appointments.map((appointment, index) => {
            const row = {
                id: index+1, patientName: appointment.name,symptoms: appointment.symptoms, doctorName: appointment.doctorName,
                availability: appointment.availability,doctorEmail: appointment.doctorEmail
            };
            rows.push(row);
        });
        grid =  <Grid rows={rows} columns={columns} pageSize={parseInt("5")}/>;
    }

    return (
        <>
        <span className="h1 p-3 d-flex justify-content-center"> Appointments </span>
            {grid}
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