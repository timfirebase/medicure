import React from "react";
import Tile from "../Tile";
import logo from "../../assets/images/logo.png"
import { DataGrid } from '@material-ui/data-grid';

const PatientHome = () => {

    const onBookAppointmentClick =  () => {
        alert('clicked');
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${
                    params.getValue(params.id, 'lastName') || ''
                }`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'KAS', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 35 },
        { id: 6, lastName: 'Melisandre', firstName: 'ABC', age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


    return(
        <>
            <div className="align-content-center align-items-center" style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={4}
                    rowsPerPageOptions={[5,10,15]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
            <div className="row">
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={logo} text={"Book Appointment"} func={onBookAppointmentClick}/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={logo} text={"View Appointments"} func={onBookAppointmentClick}/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <Tile imgPath={logo} text={"Manage Profile"} func={onBookAppointmentClick}/>
                </div>
            </div>
        </>
    );
}

export default PatientHome;