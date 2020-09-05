import React from "react"


const BirthDate = ({birthDate, setBirthDate}) => {
  const handleChange = (event) => {
    setBirthDate(event.target.value);
  }
  return (
    <div>
      <label>
        Pick your birth date:
        <input onChange={handleChange} name="birthDate" type="date" value={birthDate} />
      </label>
    </div>
  );
}
export default BirthDate;