

export const SelectDoctors = ({ doctors, doctorName, onChangeDoctorName }) => {
    return (
        <select name="doctorName" className="form-control wide" id="inputDoctorName" value={doctorName} onChange={onChangeDoctorName}>
            {doctors.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
        </select>
    );
}