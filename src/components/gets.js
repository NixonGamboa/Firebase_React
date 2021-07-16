import axios from "axios";

const baseUrl = 'https://sofkau-students.herokuapp.com/api/sofkau/students';

const getAll = async () => {
    const res = await axios.get(baseUrl)
    console.log(res.data.data)
    return res.data.data
}
export default getAll