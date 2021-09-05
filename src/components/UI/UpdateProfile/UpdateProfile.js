import React from "react";
import SignUp from "../../SignUp/SignUp";
import {connect} from "react-redux";

const UpdateProfile = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
                <SignUp roleId={"patient"} mode={"update"} label={"Update Profile"} user={props.user}/>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        user: state.authRdcr.user
    };
};

export default connect(mapStateToProps)(UpdateProfile);