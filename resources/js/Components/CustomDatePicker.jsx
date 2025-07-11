import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
            />
        </>
    );
};

export default CustomDatePicker;
