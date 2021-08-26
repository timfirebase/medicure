import React from "react";
import Tile from "../Tile";
import {Redirect} from "react-router-dom";
import logo from "../../assets/images/logo.png"

const PatientHome = () => {

    const onBookAppointmentClick =  () => {
        alert('clicked');
    }

    return(
        <>
            <div className="row">
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={logo} text={"Book Appointment"} func={onBookAppointmentClick}/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile/>
                </div>
            </div>
        </>
    );
}

export default PatientHome;