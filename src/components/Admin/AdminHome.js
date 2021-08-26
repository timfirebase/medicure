import React from "react";
import Tile from "../Tiles/Tile";
import bookAppointmentImg from "../../assets/images/bookapp.jpg";
import appointmentHistoryImg from "../../assets/images/appHistory.jpg";
import manageProfile from "../../assets/images/manageProfile.png";

const AdminHome = () => {

    let adminRoute = "";

    const onBookAppointmentClick =  () => {
        alert('clicked');
    }

    const onViewAppointmentClick =  () => {
        window.location.href='/viewAppointment';
    }

    const onManageProfileClick =  () => {
        alert('clicked');
    }

    return(
        <>
            {adminRoute}
            <div className="row">
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={bookAppointmentImg} text={"View Doctors"} func={onBookAppointmentClick}/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={appointmentHistoryImg} text={"View Patients"} func={onViewAppointmentClick}/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={manageProfile} text={"View Appointments"} func={onManageProfileClick}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={bookAppointmentImg} text={"Manage Doctors"} func={onBookAppointmentClick}/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={appointmentHistoryImg} text={"Add Admins"} func={onViewAppointmentClick}/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={manageProfile} text={"View and Download Reports"} func={onManageProfileClick}/>
                </div>
            </div>
        </>
    );
}

export default AdminHome;