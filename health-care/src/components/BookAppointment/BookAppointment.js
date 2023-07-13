import { useState } from 'react';

import { doctors } from "../../constants";
import { SelectDoctors } from "./SelectDoctors";

export const BookAppointment = () => {
    const [patientName, setPatientName] = useState('');
    const [doctorName, setDoctorName] = useState(doctors[0].name);
    const [phoneNumber, setPhoneNumber] = useState('');

    const onChangePatientName = (e) => {
        setPatientName(e.target.value);
    }

    const onChangeDoctorName = (e) => {
        setDoctorName(e.target.value);
    }

    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('book');
    }

    return (
        <section className="book_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={onSubmitHandler}>
                            <h4>
                                BOOK <span>APPOINTMENT</span>
                            </h4>
                            <div className="form-row ">
                                <div className="form-group col-lg-4">
                                    <label htmlFor="inputPatientName">Patient Name </label>
                                    <input type="text" className="form-control" id="inputPatientName" value={patientName} onChange={onChangePatientName} />
                                </div>

                                <div className="form-group col-lg-4">
                                    <label htmlFor="inputDoctorName">Doctor's Name</label>
                                    <SelectDoctors doctors={doctors} doctorName={doctorName} onChangeDoctorName={onChangeDoctorName} />
                                </div>

                            </div>
                            <div className="form-row ">
                                <div className="form-group col-lg-4">
                                    <label htmlFor="inputPhone">Phone Number</label>
                                    <input type="number" className="form-control" id="inputPhone" placeholder="XXXXXXXXXX" value={phoneNumber} onChange={onChangePhoneNumber} />
                                </div>
                                {/* <div className="form-group col-lg-4">
                                    <label htmlFor="inputSymptoms">Symptoms</label>
                                    <input type="text" className="form-control" id="inputSymptoms" placeholder="" />
                                </div> */}
                                <div className="form-group col-lg-4">
                                    <label htmlFor="inputDate">Choose Date </label>
                                    <div className="input-group date" id="inputDate" data-date-format="mm-dd-yyyy">
                                        <input type="text" className="form-control" readOnly />
                                        <span className="input-group-addon date_icon">
                                            <i className="fa fa-calendar" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <button type="submit" className="btn">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
}