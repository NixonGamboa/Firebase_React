import React, { useContext, useEffect } from "react";
import Store from "./store";
import Student from "./student";
import api from "./api";



const StudentsList = () => {
  const {
    dispatch,
    state: { students },
  } = useContext(Store);

  const studentList = students.list;

  useEffect(() => {
    api.getAll().then((students) => {
      console.log(students);
      dispatch({ type: "update-students", students });
    });
  }, [dispatch]);

  return (
    <div className="container ">
     
      {/* <div style={{ backgroundColor: "#d36600", height:5 }}>
      </div> */}

      <h2 style={styles.title}>ESTUDIANTES SOFKAU...</h2>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">NOMBRES </th>
            <th scope="col">APELLIDOS </th>
            <th scope="col">CELULAR </th>
            <th scope="col">EMAIL </th>
            <th scope="col">ESPECIALIDAD </th>
            <th scope="col">TU FAVORITO </th>
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
