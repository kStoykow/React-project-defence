import { useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
    const datepickerRef = useRef(null);

    useEffect(() => {
        // Set the initial date when the component mounts
        if (datepickerRef.current) {
            datepickerRef.current.setOpen(true); // Open the datepicker by default
            datepickerRef.current.setCaretPosition(0); // Move the cursor to the beginning of the input
        }
    }, []);

    return (
        <div>
            <DatePickerComponent
                ref={datepickerRef}
                selected={new Date()}
                dateFormat="yyyy-MM-dd"
                autoComplete="off"
                closeOnScroll={true}
                todayButton="Today"
                onChange={(date) => console.log(date)} // Handle the selected date
            />
        </div>
    );
};

export default DatePickerComponent;