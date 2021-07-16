function reducer(state, action) {
  const stateData = state.students;
  switch (action.type) {
    case "update-students":
      stateData.list = action.students;
      stateData.item = {};
      return { ...state, students: stateData };
    default:
      return state;
  }
}

export default reducer;
