// Changed http to https for ghpages.
const endPoint = 'https://pb-api.herokuapp.com/bars';
const axios = require('axios');

class barsApi {
  static getBars() {
    return axios.get(endPoint);
  }
}

export default barsApi;
