import React from "react";
import Tile from "../Tiles/Tile";
import bookAppointmentImg from "../../assets/images/bookapp.jpg";
import appointmentHistoryImg from "../../assets/images/appHistory.jpg";
import manageProfile from "../../assets/images/manageProfile.png";

const PatientHome = () => {

    let patientRoute = "";

    const onBookAppointmentClick =  () => {
        window.location.href='/bookAppointment';
    }

    const onViewAppointmentClick =  () => {
        window.location.href='/viewAppointment';
    }

    const onManageProfileClick =  () => {
        alert('clicked');
    }

    return(
        <>
            {patientRoute}
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 d-flex justify-content-center">
                        <Tile imgPath={bookAppointmentImg} text={"Book Appointment"} func={onBookAppointmentClick}/>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                        <Tile imgPath={appointmentHistoryImg} text={"View Appointments"} func={onViewAppointmentClick}/>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                        <Tile imgPath={manageProfile} text={"Manage Profile"} func={onManageProfileClick}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PatientHome;