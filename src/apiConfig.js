import axios from 'axios';

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://localhost:3001",
});

export default client;
