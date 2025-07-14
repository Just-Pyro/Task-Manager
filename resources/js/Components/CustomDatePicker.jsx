import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <>
            <div className="shadow rounded-md">
                {/* <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    inline
                /> */}

                <Calendar onChange={setSelectedDate} value={selectedDate} />
            </div>
        </>
    );
};

export default CustomDatePicker;
