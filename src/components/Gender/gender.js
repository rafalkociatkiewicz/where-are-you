import React from "react"

const avaliableGenders = [
  {label: "Male", value: "m"},
  {label: "Female", value: "f"}
]

const Gender = ({}) => {
  return (
    <div>
      <label>
        Pick your gender:
        <select name="gender">
          {avaliableGenders.map((option) => <option value={option.value}>{option.label}</option>)}
        </select>
      </label>
    </div>
  );
}
export default Gender;