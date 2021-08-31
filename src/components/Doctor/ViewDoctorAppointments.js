import React, {useEffect, useRef, useState} from "react";
import Grid from "../UI/Grid/Grid";
import * as DoctorActions from "../../store/actions/DoctorActions";
import {connect} from "react-redux";
import {Button} from "@material-ui/core";
import Swal from "sweetalert2";

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

    const handleCellClick = (param, event) => {
        if("symptoms" === param.field){
            const func = () => {document.getElementById('symptomsText').value = param.value};
            Swal.fire({
                showCancelButton:false,
                html:`<textarea type="text" rows="4" cols="40" id="symptomsText" readonly style="padding: 5%"/>`
            });
            func();
        }
    };

    let columns = [];
    const rowStyle = {
        fontSize: 14,
        width: "100%",
        textAlign: "center"
    }
    if(props.appointments) {
        columns = [
            {
                field: 'id',
                headerName: 'Sr No.',
                headerAlign: 'center',
                width: 118,
                renderCell: (cellValues) => {
                    return (
                        <span style={rowStyle} >
                            {cellValues.value}
                        </span>
                    );
                }
            },
            {
                field: 'patientName',
                headerName: 'Patient Name',
                headerAlign: 'center',
                width: 165,
                renderCell: (cellValues) => {
                    return (
                        <span style={rowStyle} >
                            {cellValues.value}
                        </span>
                    );
                }
            },
            {
                field: 'patientEmail',
                headerName: 'Patient Email',
                headerAlign: 'center',
                sortable: false,
                width: 200,
                renderCell: (cellValues) => {
                    return (
                        <span style={rowStyle} >
                            {cellValues.value}
                        </span>
                    );
                }
            },
            {
                field: 'patientPhone',
                headerName: 'Patient Phone',
                headerAlign: 'center',
                sortable: false,
                width: 180,
                renderCell: (cellValues) => {
                    return (
                        <span style={rowStyle} >
                            {cellValues.value}
                        </span>
                    );
                }
            },
            {
                field: 'availability',
                headerName: 'Doctor Availability',
                headerAlign: 'center',
                sortable: false,
                width: 200,
                renderCell: (cellValues) => {
                    return (
                        <span style={rowStyle} >
                            {cellValues.value}
                        </span>
                    );
                }
            },
            {
                field: 'symptoms',
                headerName: 'Symptoms',
                headerAlign: 'center',
                sortable: false,
                width: 200,
                renderCell: (cellValues) => {
                    return (
                        <span style={rowStyle} >
                            {cellValues.value}
                        </span>
                    );
                }
            },
            {
                field: 'prescription',
                headerName: 'Prescription',
                sortable: false,
                headerAlign: 'center',
                renderCell: (params) => {
                    if(props.appointments) {
                        const filteredAppointment = props.appointments.filter(appt => appt.appointmentId === params.value)[0];
                        if(filteredAppointment.prescription) {
                            return(
                                <strong style={rowStyle}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        style={{alignItems: "center"}}
                                        onClick={() => window.open(filteredAppointment.prescription, '_blank', 'noopener,noreferrer')}
                                    >
                                        View Prescription
                                    </Button>
                                </strong>
                            );
                        } else {
                            return(
                                <strong style={rowStyle}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        style={{alignItems: "center"}}
                                        onClick={() => onPrescribeClick(params.value)}
                                    >
                                        Prescribe
                                    </Button>
                                </strong>
                            );
                        }
                    }
                },
                width: 200
            },
            {
                field: 'status',
                headerName: 'Status',
                headerAlign: 'center',
                width: 150,
                renderCell: (cellValues) => {
                    return (
                        <span style={rowStyle} >
                            {cellValues.value}
                        </span>
                    );
                }
            }
        ];
    }

    let grid = '';

    if(props.appointments) {
        const rows = [];
        props.appointments.map((appointment, index) => {
            const row = {
                id: index+1, patientName: appointment.name,symptoms: appointment.symptoms, patientPhone: appointment.phone,
                availability: appointment.availability,patientEmail: appointment.email, prescription:appointment.appointmentId, status: appointment.status
            };
            rows.push(row);
        });
        grid =  <Grid rows={rows} columns={columns} pageSize={parseInt("5")} selectionModel={props.fileSaved} cellClicked={handleCellClick} styles={{paddingLeft: '15%', paddingRight: '10%'}}/>;
    }

    return (
        <>
            <span className="h1 p-3 d-flex justify-content-center"> Appointments </span>
            {grid}
        </>
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