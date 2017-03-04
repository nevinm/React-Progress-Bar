const endPoint = 'http://pb-api.herokuapp.com/bars';
const axios = require('axios');

class barsApi {
  static getBars() {
    return axios.get(endPoint);
  }
}

export default barsApi;
