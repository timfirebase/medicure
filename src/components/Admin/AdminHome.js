import React from "react";
import Tile from "../Tiles/Tile";
import viewDoctors from "../../assets/images/Doctor.png";
import viewPatients from "../../assets/images/Patients.png";
import manageProfile from "../../assets/images/manageProfile.png";
import manageDocs from "../../assets/images/manageDocs.png";
import addAdmin from "../../assets/images/addAdmin.png";
import viewReports from "../../assets/images/viewReports.png";

const AdminHome = () => {

    let adminRoute = "";

    const onViewDoctorClick =  () => {
        window.location.href='/viewDoctor';
    }

    const onViewPatientClick =  () => {
        window.location.href='/viewPatient';
    }

    const onViewAppointmentClick =  () => {
        window.location.href='/viewAppointment';
    }

    const onManageDoctorsClick =  () => {
        window.location.href='/manageDoctor';
    }

    const onManageAdminsClick =  () => {
        window.location.href='/manageAdmin';
    }

    const onViewReportClick =  () => {
        window.location.href='/viewReports';
    }

    return(
        <>
            {adminRoute}
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                        <Tile imgPath={viewDoctors} text={"View Doctors"} func={onViewDoctorClick}/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <Tile imgPath={viewPatients} text={"View Patients"} func={onViewPatientClick}/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">

                        <Tile imgPath={manageProfile} text={"View Appointments"} func={onViewAppointmentClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                        <Tile imgPath={manageDocs} text={"Manage Doctors"} func={onManageDoctorsClick}/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <Tile imgPath={addAdmin} text={"Add Admins"} func={onManageAdminsClick}/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <Tile imgPath={viewReports} text={"View and Download Reports"} func={onViewReportClick}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHome;