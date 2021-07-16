import axios from "axios";
import CONSTANTS from "../utils/constants";

const baseUrl = CONSTANTS.HOST_API;

const getAll = async () => {
  const res = await axios.get(`${baseUrl}/api/sofkau/students`);
  console.log(res.data.data);
  return res.data.data;
};
export default getAll;
