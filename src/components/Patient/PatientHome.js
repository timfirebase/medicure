import React from "react";
import Tile from "../UI/Tiles/Tile";
import bookAppointmentImg from "../../assets/images/bookapp.jpg";
import appointmentHistoryImg from "../../assets/images/appHistory.jpg";
import manageProfile from "../../assets/images/manageProfile.png";
import {useHistory} from "react-router-dom";

const PatientHome = () => {

    const history = useHistory();

    const onBookAppointmentClick =  () => {
        history.push('/bookAppointment');
    }

    const onViewAppointmentClick =  () => {
        history.push('/viewAppointment');
    }

    const onManageProfileClick =  () => {
        alert('clicked');
    }

    return(
        <>
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