import React from "react";
import {DataGrid, GridToolbarContainer, GridToolbarExport} from "@material-ui/data-grid";

const Grid = (props) => {

    function downloadData() {
        return (
            <GridToolbarContainer>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    return (
        <div style={{ height: 400, width: '100%' }}  className="container">
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={props.pageSize}
                rowsPerPageOptions={[props.pageSize]}
                components={{
                    Toolbar: downloadData,
                }}
            />
        </div>
    );
};
export default Grid;