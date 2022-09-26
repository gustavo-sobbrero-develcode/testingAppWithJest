import axios from 'axios';

// create axios
const instance = axios.create({
  baseURL: 'http://172.22.19.24:3000/',
  timeout: 1000,
});

export default instance;
