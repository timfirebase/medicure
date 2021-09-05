import React from "react";
import {Button} from "@material-ui/core";
import Grid from "./Grid";
import Swal from "sweetalert2";

const AppointmentGrid = (props) => {

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
                field: 'doctorName',
                headerName: 'Doctor Name',
                headerAlign: 'center',
                sortable: false,
                width: 150,
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
                                        style={{alignItems: "center", cursor: "pointer"}}
                                        onClick={() => window.open(filteredAppointment.prescription, '_blank', 'noopener,noreferrer')}
                                    >
                                        View Prescription
                                    </Button>
                                </strong>
                            );
                        } else {
                            if("doctor" === props.role && "active" === filteredAppointment.status) {
                                return(
                                    <strong style={rowStyle}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="small"
                                            style={{alignItems: "center", cursor: "pointer"}}
                                            onClick={() => props.onPrescribeClick(params.value)}
                                        >
                                            Prescribe
                                        </Button>
                                    </strong>
                                );
                            } else {
                                return (<span style={rowStyle}>Pending</span>);
                            }
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
                    const status = cellValues.value;
                    if("active" === status) {
                        return (
                            <span style={rowStyle} className="bg-success text-white">
                            {cellValues.value}
                             </span>
                        );
                    } else {
                        return (
                            <span style={rowStyle} className="bg-danger text-white">
                            {cellValues.value}
                            </span>
                        );
                    }
                }
            },
            {
                field: 'action',
                headerName: 'Action',
                headerAlign: 'center',
                hide: (props.role && "admin" === props.role) ? true : false ,
                sortable: false,
                width: 200,
                renderCell: (cellValues) => {
                    if(props.appointments) {
                        const filteredAppointment = props.appointments.filter(appt => appt.appointmentId === cellValues.value)[0];
                        if("active" === filteredAppointment.status) {
                            return (
                                <div style={rowStyle}>
                                    <span>
                                        <Button
                                              variant="contained"
                                              color="secondary"
                                              size="small"
                                              style={{alignItems: "center", cursor: "pointer", marginRight:"2px"}}
                                              onClick={() => props.onCancelClick(cellValues.value)}
                                          >
                                          Cancel
                                        </Button>
                                     </span>
                                    {
                                        "doctor" === props.role ? (
                                            <span>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    style={{alignItems: "center", cursor: "pointer"}}
                                                    onClick={() => props.onRescheduleClick(cellValues.value)}
                                                >
                                                    Reschedule
                                                </Button>
                                            </span>
                                        ) : ''

                                    }
                                </div>
                            );
                        } else {
                            return (
                                <span style={rowStyle}>N/A</span>
                            );
                        }
                    }
                }
            }
        ];
    }

    let grid = '';

    if(props.appointments) {
        const rows = [];
        props.appointments.map((appointment, index) => {
            const row = {
                id: index+1, patientName: appointment.name,symptoms: appointment.symptoms, patientPhone: appointment.phone, doctorName: appointment. doctorName,
                availability: appointment.availability,patientEmail: appointment.email, prescription:appointment.appointmentId, status: appointment.status, action:appointment.appointmentId
            };
            rows.push(row);
        });
        grid =  <Grid rows={rows} columns={columns}
                      pageSize={parseInt("8")}
                      selectionModel={props.fileSaved}
                      cellClicked={handleCellClick}
                      styles={{paddingLeft: '3%', paddingRight: '3%', height:'570px'}}/>;
    }

    return (
        <>
            <span className="h1 p-3 d-flex justify-content-center"> Appointments </span>
            {grid}
        </>
    );
}

export default AppointmentGrid;