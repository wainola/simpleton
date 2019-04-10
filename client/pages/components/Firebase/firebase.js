import getConfig from 'next/config';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} = getConfig().publicRuntimeConfig;

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  setClient(uid) {
    return this.db.ref(`/clients/${uid}`);
  }

  getClients() {
    return this.db.ref('clients');
  }
}

export default Firebase;
