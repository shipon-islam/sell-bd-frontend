import axios from "axios";
let token = JSON.parse(localStorage.getItem("user")).token;
const Axios = axios.create({
  baseURL: "http://localhost:5000",
  headers: { Authorization: "Bearer " + token },
});
export default Axios;
