import React, {useEffect} from "react";
import Grid from "../UI/Grid/Grid";
import * as PatientActions from "../../store/actions/PatientActions";
import {connect} from "react-redux";

const columns = [
    {
        field: 'id',
        headerName: 'Sr No.',
        width: 150
    },
    {
        field: 'fullName',
        headerName: 'Last name',
        width: 200
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'email',
        width: 200
    }
];

const PatientAppointments = (props) => {

    useEffect(()=>{
        props.getAllDoctors();
    },[]);

    const rows = [];

    let grid = '';

    if(props.doctors && props.doctors.length > 0) {
        const rows = [];
        props.doctors.map((doctor, index) => {
            const row = {id: index+1, fullName: doctor.name, email: doctor.email};
            rows.push(row);
        });
        grid =  <Grid rows={rows} columns={columns} pageSize={parseInt("5")}/>;
    }

    return (
        <>
        <span className="h1 p-3 d-flex justify-content-center"> Appointments </span>
            {grid}
        </>
    );
}

const mapStateToProps = state => {
    return {
        doctors : state.patientRdcr.doctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctors: () => dispatch(PatientActions.getDoctorsInit())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PatientAppointments);