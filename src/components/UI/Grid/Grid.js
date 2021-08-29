import React from "react";
import {DataGrid} from "@material-ui/data-grid";

const Grid = (props) => {
    return (
        <div style={{ height: 400, width: '100%' }}  className="container">
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={props.pageSize}
                rowsPerPageOptions={[5,10,15]}
            />
        </div>
    );
};
export default Grid;