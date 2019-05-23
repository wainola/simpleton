import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { API_URL } = publicRuntimeConfig;

class Api {
  static async sendClientData(data) {
    const datasend = await fetch(`${API_URL}/client`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}

export default Api;
