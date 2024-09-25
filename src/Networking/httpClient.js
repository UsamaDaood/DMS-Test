import axiosInstance from './axiosInstance';

class httpClient {
  static async callAPI(method, url, params, authorization) {
    console.log('LOG:: URL ' + url);
    const config = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer 8U7dPDoiozxF26WNLAdJdo2S9KN7wwg58Dub0v9D',
      },
      data: params,
      url,
    };

    let response = await axiosInstance.request(config);
    return response;
  }
}

export default httpClient;
