import axios from 'axios';

export default axios.create({
  baseURL: 'https://front-test-api.herokuapp.com/api',
});
