import React, { useContext, useEffect } from "react";
import Store from "./store";
import C from "../utils/constants";
import Student from "./student";
import getAll from "./gets";
import Logo from "../img/sofkau-logo-horizontal.png"

const HOST_API = C.HOST_API;

const StudentsList = () => {
  const {
    dispatch,
    state: { students },
  } = useContext(Store);

  const studentList = students.list;

  useEffect(() => {
    getAll().then((students) => {
      console.log(students);
      dispatch({ type: "update-students", students });
    });
  }, [dispatch]);

  return (
    <div className="container ">
      <div>
      <img src={Logo} alt="User Avatar" className="img-size-200"/>
      </div>
      <div style={{ backgroundColor: "#d36600", height:5 }}>
      </div>

      <h2 style={styles.title}>ESTUDIANTES SOFKAU...</h2>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombres </th>
            <th scope="col">Apellidos </th>
            <th scope="col">Celular </th>
            <th scope="col">Email </th>
            <th scope="col">Especialidad </th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => {
            return <Student key={student.id} studentData={student} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
const styles= {
  title:{
    margin: 40,
    textAlign: "center"

  }
}
export default StudentsList;
