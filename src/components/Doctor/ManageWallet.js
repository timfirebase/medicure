import React from "react";
import {connect} from "react-redux";
import currency from '../../assets/images/currency.png';
import moneyTransfer from "../../assets/images/moneyTransfer.png";
import StripePayment from "../UI/StripePayment/StripePayment";
import logo from "../../assets/images/logo.png";
import * as DoctorActions from "../../store/actions/DoctorActions";
import Swal from "sweetalert2";

const ManageWallet = (props) => {

    let totalBalance = props.doctor ? props.doctor.totalBalance : 0;

    const onWithdrawBalanceClick = token => {
        const doc = {...props.doctor};
        doc.totalBalance = 0;
        props.onWithdraw(doc);
        Swal.fire({
            title: 'Please wait...',
            html: '',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });
    };

    const validate = () => {
    }

    if(props.isWithdrawSuccess) {
        Swal.close();
        Swal.fire('Withdraw Successful!','','success');
        totalBalance = 0;
        props.resetWithdrawStatus();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center">
                            <div>
                                <img src={currency} alt={"currency"}/>
                            </div>
                            <span className="h2">Total Balance</span>
                        </div>
                        <div className="card-body text-center">
                          <span className="h5"> $ {totalBalance} </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center">
                            <div>
                                <img src={moneyTransfer} alt={"withdraw"}/>
                            </div>
                            <span className="h2">Withdraw Balance</span>
                        </div>
                        <div className="card-body text-center p-4">
                            {
                                totalBalance > 0 ? (
                                    <StripePayment
                                        label={"Withdraw Now"}
                                        name={"Medicure"}
                                        desc={"Balance"}
                                        panelLabel={"Withdraw Now"}
                                        img={logo}
                                        price={totalBalance}
                                        onPaymentSubmit={onWithdrawBalanceClick}
                                        publishableKey={process.env.REACT_APP_PUBLISHABLE_KEY}
                                        btnStyle={"w-100 bg-success border-success p-2"}
                                        validate={validate}
                                    />
                                ) : (<span className="h6">No Balance Currently</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        doctor: state.authRdcr.user,
        isWithdrawSuccess: state.doctorRdcr.isWithdrawSuccess
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onWithdraw: (doctor) => dispatch(DoctorActions.updateDoctorBalanceInit(doctor)),
        resetWithdrawStatus:  () => dispatch(DoctorActions.clearBalanceWithdrawStatus())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ManageWallet);