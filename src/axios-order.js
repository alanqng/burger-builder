import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-6f91e.firebaseio.com/"
});

export default instance;
