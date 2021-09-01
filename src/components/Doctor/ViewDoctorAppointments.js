import React, {useEffect, useRef, useState} from "react";
import Grid from "../UI/Grid/Grid";
import * as DoctorActions from "../../store/actions/DoctorActions";
import {connect} from "react-redux";
import {Button} from "@material-ui/core";
import Swal from "sweetalert2";
import AppointmentGrid from "../UI/Grid/AppointmentGrid";

const ViewDoctorAppointments = (props) => {

    if(props.fileSaved.length > 0 || props.appointments) {
        Swal.close();
    }

    useEffect(()=>{
        if(props.doctor) {
            props.getDocAppointments(props.doctor.id);
            Swal.fire({
                title: 'Please wait...',
                html: '',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
        }
    },[]);

    const onPrescribeClick = (appointmentId) => {
        Swal.fire({
            showCancelButton:true,
            html:`<textarea type="text" rows="8" cols="50" id="prescriptionText"/>`,
            preConfirm:function(){
                props.createAndStorePresc(document.getElementById('prescriptionText').value,appointmentId);
                Swal.fire({
                    title: 'Please wait...',
                    html: '',
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading()
                    }
                });
            }
        });
    }

    return (
        <AppointmentGrid appointments={props.appointments} fileSave={props.fileSaved} onPrescribeClick={onPrescribeClick} role={props.doctor.role}/>
    );
};


const mapStateToProps = state => {
    return {
        appointments : state.doctorRdcr.doctorAppointments,
        doctor: state.authRdcr.user,
        fileSaved: state.doctorRdcr.fileSaved
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDocAppointments: (docId) => dispatch(DoctorActions.getDocAppointmentsInit(docId)),
        createAndStorePresc: (presc,appointmentId) => dispatch(DoctorActions.createPrescFileInit(presc,appointmentId))
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(ViewDoctorAppointments);