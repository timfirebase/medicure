import React from "react";
import Tile from "../UI/Tiles/Tile";
import viewDoctors from "../../assets/images/Doctor.png";
import viewPatients from "../../assets/images/Patients.png";
import manageProfile from "../../assets/images/manageProfile.png";
import manageDocs from "../../assets/images/manageDocs.png";
import addAdmin from "../../assets/images/addAdmin.png";
import viewReports from "../../assets/images/viewReports.png";
import {useHistory} from "react-router-dom";

const AdminHome = () => {

    const history = useHistory();

    // const onViewDoctorClick =  () => {
    //     history.push('/viewDoctor');
    // }

    const onViewPatientClick =  () => {
        history.push('/viewPatient');
    }

    const onViewAppointmentClick =  () => {
        history.push('/viewAllAppointments');
    }

    const onManageDoctorsClick =  () => {
        history.push('/manageDoctor');
    }

    const onManageAdminsClick =  () => {
        history.push('/manageAdmin');
    }

    // const onViewReportClick =  () => {
    //     history.push('/viewReports');
    // }

    return(
        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center">
                        <Tile imgPath={viewPatients} text={"View Patients"} func={onViewPatientClick}/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">

                        <Tile imgPath={manageProfile} text={"View Appointments"} func={onViewAppointmentClick}/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Tile imgPath={manageDocs} text={"Manage Doctors"} func={onManageDoctorsClick}/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Tile imgPath={addAdmin} text={"Manage Admins"} func={onManageAdminsClick}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHome;