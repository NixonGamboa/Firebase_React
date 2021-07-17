import axios from "axios";
import CONSTANTS from "../utils/constants";

const baseUrl = CONSTANTS.HOST_API;

const getAll = async () => {
  const res = await axios.get(`${baseUrl}/api/sofkau/students`);
  console.log(res.data.data);
  return res.data.data;
};
const voteById = async (StudentId) => {
  const res = await axios.patch(`${baseUrl}/api/sofkau/students/${StudentId}`);
  return res.data.data;
};
const getRanking = async () => {
  const res = await axios.get(`${baseUrl}/api/sofkau/students/ranking`);
  return res.data.data;
};

const api = {
  getAll,
  getRanking,
  voteById
}

export default api;
