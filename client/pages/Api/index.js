import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { API_URL } = publicRuntimeConfig;

class Api {
  static async sendClientData(data) {
    return fetch(`${API_URL}/client`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}

export default Api;
