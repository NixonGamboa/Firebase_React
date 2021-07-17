import React, { useContext } from "react";
import api from "./api";
import Store from "./store";

const Student = (props) => {
  const data = props.studentData;
  const { dispatch } = useContext(Store);

  const onVote = (event, id) => {
    event.preventDefault();
    api.voteById(id).then((ranking) => {
      dispatch({ type: "update-ranking", ranking });
    });
  };

  return (
    <tr key={props.key} className="table-light">
      <td>{data.name}</td>
      <td>{data.lastName}</td>
      <td>{data.cellphone}</td>
      <td>{data.email}</td>
      <td>{data.speciality}</td>
      <td>
        <button className="btn btn-primary" onClick={(event) => onVote(event, data._id)}>¡Vota aqui!</button>
      </td>
    </tr>
  );
};
export default Student;
