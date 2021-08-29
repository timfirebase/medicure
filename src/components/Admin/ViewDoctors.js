import React, {useEffect} from "react";
import Grid from "../UI/Grid/Grid";
import * as PatientActions from "../../store/actions/PatientActions";
import {connect} from "react-redux";


const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'fullName',
        headerName: 'Full Name',
        width: 200
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'email',
        width: 200
    },
    {
        field: 'number',
        headerName: 'Contact Number',
        width: 200
    },
];


const ViewDoctors = (props) => {

    useEffect(() => {
        props.getAllDoctors();
    },[]);



    const rows = [];

    let grid = '';

    if(props.doctors && props.doctors.length > 0) {
        const rows = [];
        props.doctors.map((doctor, index) => {
            const row = {id: index+1, fullName: doctor.name, email: doctor.email, number: doctor.phone};
            rows.push(row);
        });
        grid =  <Grid rows={rows} columns={columns} pageSize={parseInt("5")}/>;
    }

    return (
        <>
            <span className="h1 p-3 d-flex justify-content-center"> View Doctors </span>
            {grid}
        </>
    );
}
const mapStateToProps = state => {
    return {
        doctors: state.patientRdcr.doctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctors: () => dispatch(PatientActions.getDoctorsInit()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ViewDoctors);