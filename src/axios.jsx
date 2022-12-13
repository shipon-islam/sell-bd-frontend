import axios from "axios";
let token = JSON.parse(localStorage.getItem("user")).token;
const Axios = axios.create({
  baseURL: "https://sellbdapi.onrender.com",
  headers: { Authorization: "Bearer " + token },
});
export default Axios;
