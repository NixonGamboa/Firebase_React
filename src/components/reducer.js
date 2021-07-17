function reducer(state, action) {
  const stateData = state.students;
  const stateRanking = state.ranking;
  switch (action.type) {
    case "update-students":
      stateData.list = action.students;
      stateData.item = {};
      return { ...state, students: stateData };

    case "update-ranking":
      stateRanking.list = action.ranking.orderedStudents;
      console.log(stateRanking.list);
      stateRanking.item = {};
      return { ...state, ranking: stateRanking };
    default:
      return state;
  }
}

export default reducer;
