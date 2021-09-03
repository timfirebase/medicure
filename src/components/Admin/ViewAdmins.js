import React, {useEffect} from "react";
import Grid from "../UI/Grid/Grid";
import {Button} from "@material-ui/core";

const rowStyle = {
    fontSize: 14,
    width: "100%",
    textAlign: "center"
}

const ViewAdmins = (props) => {


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
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            headerAlign: 'center',
            renderCell: (params) => {
                const id = params.value;
                return(
                    <strong style={rowStyle}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            style={{alignItems: "center", cursor:"pointer"}}
                            onClick={() => props.onDeleteClick(id)}
                        >
                            Delete
                        </Button>
                    </strong>
                );
            },
            width: 200
        }
    ];

    const rows = [];
    let grid = '';
    if(props.admins && props.admins.length > 0) {
        const rows = [];
        props.admins.map((admin, index) => {
            const row = {id: index+1, fullName: admin.name, email: admin.email, number: admin.phone, action: admin.id};
            rows.push(row);
        });
        grid =  <Grid rows={rows} columns={columns} pageSize={parseInt("5")}/>;
    }
    return (
        <>
            <span className="h1 p-3 d-flex justify-content-center"> {props.heading}   </span>
            {grid}
        </>
    );
}


export default ViewAdmins;