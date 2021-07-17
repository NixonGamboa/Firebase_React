import React, { useContext, useEffect } from "react";
import Store from "./store";
import api from "./api";
import StudentPosition from "./student-position";

const RankingList = () => {
  const {
    dispatch,
    state: { ranking },
  } = useContext(Store);

  const studentList = ranking.list;

  const onGetRanking = (event) => {
    event.preventDefault();
    api.getRanking().then((ranking) => {
      dispatch({ type: "update-ranking", ranking });
    });
  };
  useEffect(() => {});

  return (
    <div className="container ">
      <div style={{ backgroundColor: "#d36600", height: 5 }}> </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={styles.title}>RANKING DE POPULARIDAD...</h2>
        <button
          className="btn btn-warning"
          style={{ height: 50 }}
          onClick={(event) => onGetRanking(event)}
        >
          ¡LOS MAS POPULARES!
        </button>
      </div>

      {!studentList.length > 0 ? (
        <p className="alert-warning text-center">Por favor realiza tu voto</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombres </th>
              <th scope="col">Votos </th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student) => {
              return (
                <StudentPosition key={student.id} positionData={student} />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
const styles = {
  title: {
    margin: 40,
    textAlign: "center",
  },
};
export default RankingList;
