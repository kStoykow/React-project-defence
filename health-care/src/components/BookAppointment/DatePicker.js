import { useEffect, useRef, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.Modules.css';

const DatePickerComponent = () => {
    const datepickerRef = useRef(null);

    useEffect(() => {
        // Set the initial date when the component mounts
        if (datepickerRef.current && datepickerRef.current.input) {
            datepickerRef.current.setOpen(false);

            // Move the cursor to the beginning of the input
            const inputElement = datepickerRef.current.input;
            inputElement.focus();
            inputElement.setSelectionRange(0, 0);
        }
    }, []);

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <div className="input-group date" id="inputDate">
            <input
                id="inputDate"
                className="form-control formm"
                ref={ref}
                value={value}
                onClick={onClick}
                readOnly
            />
            <span className="input-group-addon date_icon">
                <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
        </div>
    ));

    return (
        <div>
            <DatePicker
                ref={datepickerRef}
                selected={new Date()}
                dateFormat="dd-MM-yyyy"
                autoComplete="off"
                closeOnScroll={false}
                todayButton="Today"
                onChange={(date) => console.log(date)} // Handle the selected date
                customInput={<CustomInput />}
            />
        </div>
    );
};

export default DatePickerComponent;