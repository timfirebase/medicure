import React from "react";
import Tile from "../UI/Tiles/Tile";
import manageWalletImg from "../../assets/images/manageWallet.png";
import appointmentHistoryImg from "../../assets/images/appHistory.jpg";
import manageProfileImg from "../../assets/images/manageProfile.png";
import {useHistory} from "react-router-dom";

const DoctorHome = () => {
    const history = useHistory();

    const onManageWalletClick =  () => {
        history.push('/bookAppointment');
    }

    const onViewAppointmentClick =  () => {
        history.push('/ViewDoctorAppointments');
    }

    const onManageProfileClick =  () => {
        alert('clicked');
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={appointmentHistoryImg} text={"View Appointments"} func={onViewAppointmentClick}/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={manageProfileImg} text={"Manage Profile"} func={onManageProfileClick}/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={manageWalletImg} text={"Manage Wallet"} func={onManageWalletClick}/>
                </div>
            </div>
        </div>
    );
}
export default DoctorHome;