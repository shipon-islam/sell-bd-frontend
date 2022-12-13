import axios from "axios";
let token = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")).token
  : null;
//https://sellbdapi.onrender.com
const Axios = axios.create({
  baseURL: "https://sellbdapi.onrender.com",
  headers: { Authorization: "Bearer " + token },
});
export default Axios;
