import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-d0449.firebaseio.com/"
});

export default instance;
