import React, {useEffect} from "react";
import * as DoctorActions from "../../store/actions/DoctorActions";
import {connect} from "react-redux";
import Swal from "sweetalert2";
import AppointmentGrid from "../UI/Grid/AppointmentGrid";
import withReactContent from "sweetalert2-react-content";
import sendEmail from "../../emailSender";

const ViewDoctorAppointments = (props) => {
    const MySwal = withReactContent(Swal);
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
        props.resetAppointmentCancelStatus();
        props.resetAppointmentRescheduleStatus();
    },[]);

    useEffect(()=>{
        if(props.appointmentCancelled) {
            Swal.close();
            Swal.fire('Appointment Cancelled!','','success');
        }
    },[props.appointmentCancelled])

    useEffect(()=>{
        if(props.isRescheduled) {
            Swal.close();
            Swal.fire('Appointment Rescheduled!','','success');
        }
    },[props.isRescheduled])

    const onPrescribeClick = (appointmentId) => {
        const filteredAppointment = props.appointments.filter(appt => appt.appointmentId === appointmentId)[0];
        const prescribeEmail = {
            fromName : filteredAppointment.doctorName,
            toName : filteredAppointment.name,
            message: "Please review your prescription from the portal",
            toMail: filteredAppointment.email,
        };

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
                    },
            });
                sendEmail(prescribeEmail, "template_0g17kx2")
            }
        });
    }

    const onCancelClick = (appointmentId) => {
        const filteredAppointment = props.appointments.filter(appt => appt.appointmentId === appointmentId)[0];
        const onCancelEmail = {
            fromName : filteredAppointment.doctorName,
            toName : filteredAppointment.name,
            message: "The appointment has been cancelled by your doctor",
            toMail: filteredAppointment.email,
        };
        Swal.fire({
            title: 'Please wait...',
            html: '',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });
        sendEmail(onCancelEmail, "template_cdrprtd")
        props.onCancelAppointment(appointmentId,"cancelled");
    }

    const onRescheduleClick = (appointmentId) => {

        const SelectData = () => {
            return(
                <select name="availability" id="doctorAvailability">
                    <option>Select availability time</option>
                    {
                        (props.doctor && props.doctor.availability) ? (
                            props.doctor.availability.map((avlblty,index) => (
                                <option key={index} value={avlblty}> {avlblty} </option>)
                            )
                        ): ''
                    }
                </select>
            );
        }
        MySwal.fire({
            showCancelButton:true,
            html:<SelectData/>,
            preConfirm:function(){
                if(document.getElementById('doctorAvailability').value === "Select availability time") {
                    Swal.fire('Availability cannot be empty!', '', 'error');
                } else {
                    props.onRescheduleClick(document.getElementById('doctorAvailability').value, appointmentId);
                    const filteredAppointment = props.appointments.filter(appt => appt.appointmentId === appointmentId)[0];
                    const onRescheduleEmail = {
                        fromName: filteredAppointment.doctorName,
                        toName: filteredAppointment.name,
                        message: "The appointment has been rescheduled by " + filteredAppointment.doctorName + " to " + document.getElementById('doctorAvailability').value,
                        toMail: filteredAppointment.email,
                    }
                    Swal.fire({
                        title: 'Please wait...',
                        html: '',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading()
                        }
                    });
                    sendEmail(onRescheduleEmail, "template_cdrprtd")
                }
            }
        });


    }


    return (
        <AppointmentGrid appointments={props.appointments}
                         fileSave={props.fileSaved}
                         onPrescribeClick={onPrescribeClick}
                         role={props.doctor? props.doctor.role : ""}
                         onCancelClick={onCancelClick}
                         onRescheduleClick = {onRescheduleClick}
        />
    );
};


const mapStateToProps = state => {
    return {
        appointments : state.doctorRdcr.doctorAppointments,
        doctor: state.authRdcr.user,
        fileSaved: state.doctorRdcr.fileSaved,
        appointmentCancelled : state.doctorRdcr.appointmentCancelled,
        isRescheduled: state.doctorRdcr.isRescheduled
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDocAppointments: (docId) => dispatch(DoctorActions.getDocAppointmentsInit(docId)),
        createAndStorePresc: (presc,appointmentId) => dispatch(DoctorActions.createPrescFileInit(presc,appointmentId)),
        onCancelAppointment: (appointmentId,status) => dispatch(DoctorActions.cancelDoctorAppointmentInit(appointmentId,status)),
        resetAppointmentCancelStatus: () => dispatch(DoctorActions.resetAppointmentCancelStatus()),
        onRescheduleClick: (date,appointmentId) => dispatch(DoctorActions.rescheduleAppointmentInit(date,appointmentId)),
        resetAppointmentRescheduleStatus: () => dispatch(DoctorActions.resetAppointmentRescheduleStatus())
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(ViewDoctorAppointments);