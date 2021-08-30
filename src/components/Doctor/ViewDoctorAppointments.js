import React, {useEffect, useRef, useState} from "react";
import Grid from "../UI/Grid/Grid";
import * as DoctorActions from "../../store/actions/DoctorActions";
import {connect} from "react-redux";
import {Button} from "@material-ui/core";
import Swal from "sweetalert2";

const ViewDoctorAppointments = (props) => {

    useEffect(()=>{
        if(props.doctor) {
            props.getDocAppointments(props.doctor.id);
        }
    },[]);

    const onPrescribeClick = () => {
        Swal.fire({
            showCancelButton:true,
            html:`<textarea type="text" rows="8" cols="50" id="prescriptionText"/>`,
            preConfirm:function(){
                //document.getElementById('prescriptionText').value;

            }
        })
    }

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
            field: 'patientEmail',
            headerName: 'Patient Email',
            headerAlign: 'center',
            width: 200
        },
        {
            field: 'patientPhone',
            headerName: 'Patient Phone',
            headerAlign: 'center',
            width: 180
        },
        {
            field: 'availability',
            headerName: 'Doctor Availability',
            headerAlign: 'center',
            width: 200
        },
        {
            field: 'symptoms',
            headerName: 'Symptoms',
            headerAlign: 'center',
            width: 200
        },
        {
            field: 'prescription',
            headerName: 'Prescription',
            sortable: false,
            headerAlign: 'center',
            renderCell: () => (
                <strong>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ alignItems: "center" }}
                        onClick = {onPrescribeClick}
                    >
                        Prescribe
                    </Button>
                </strong>
            ),
            width: 200
        }
    ];

    let grid = '';

    if(props.appointments) {
        const rows = [];
        props.appointments.map((appointment, index) => {
            const row = {
                id: index+1, patientName: appointment.name,symptoms: appointment.symptoms, patientPhone: appointment.phone,
                availability: appointment.availability,patientEmail: appointment.email, prescription:<button></button>
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
        appointments : state.doctorRdcr.doctorAppointments,
        doctor: state.authRdcr.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDocAppointments: (docId) => dispatch(DoctorActions.getDocAppointmentsInit(docId))
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(ViewDoctorAppointments);