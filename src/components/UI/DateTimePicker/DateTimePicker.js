import React from "react";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const DateTimePicker = (props) => {
    return (
        <DatePicker
            multiple
            sort
            className="rmdp-mobile"
            render={<InputIcon/>}
            minDate={new Date()}
            value={props.availability}
            onChange={props.setAvailability}
            format="MMMM DD YYYY HH:mm A"
            plugins={[
                <TimePicker position="bottom" hideSeconds/>,
                <DatePanel />
            ]}
        />
    );
};

export default DateTimePicker;