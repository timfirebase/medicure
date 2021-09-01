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

    const classes = props.styles ? '' : 'container';
    let styles =  {height: 450, width: '100%'};
    if(props.styles) {
        const propStyles = props.styles;
        styles = {...propStyles , ...styles}
    }
    return (
        <div style={styles}  className={classes}>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={props.pageSize}
                rowsPerPageOptions={[props.pageSize]}
                components={{
                    Toolbar: downloadData,
                }}
                selectionModel={props.selectionModel}
                onCellClick={props.cellClicked}
            />
        </div>
    );
};
export default Grid;