import React from "react";

const Student = (props) => {
  const data = props.studentData;

  return (
    <tr className="table-light">
      <td>{data.name}</td>
      <td>{data.lastName}</td>
      <td>{data.cellphone}</td>
      <td>{data.email}</td>
      <td>{data.speciality}</td>
    </tr>
  );
};
export default Student;
