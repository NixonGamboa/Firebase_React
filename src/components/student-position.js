import React from "react";

const StudentPosition = (props) => {
  const data = props.positionData;
  

  return (
    <tr key={props.key} className="table-light">
      <td>{`${data.name} ${data.lastName}`}</td>
      <td>{data.votes}</td>
    </tr>
  );
};
export default StudentPosition;
