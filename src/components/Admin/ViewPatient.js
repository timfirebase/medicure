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
];

const ViewPatients = (props) => {

    useEffect(() => {
        props.getAllPatients();
    },[]);



    const rows = [];

    let grid = '';

    if(props.patients && props.patients.length > 0) {
        const rows = [];
        props.patients.map((patient, index) => {
            const row = {id: index+1, fullName: patient.name, email: patient.email};
            rows.push(row);
        });
        grid =  <Grid rows={rows} columns={columns} pageSize={parseInt("5")}/>;
    }


    return (
        <>
            <span className="h1 p-3 d-flex justify-content-center"> Patients </span>
            {grid}
        </>
    );
}


const mapStateToProps = state => {
    return {
        patients: state.patientRdcr.patients
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllPatients: () => dispatch(PatientActions.getPatientsInit()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ViewPatients);