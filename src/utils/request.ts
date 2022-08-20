import axios from "axios";
const instance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front.itheima.net/",
  timeout: 8000,
});
export default instance;
