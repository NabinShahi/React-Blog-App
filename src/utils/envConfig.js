import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
  BASE_URL: process.env.REACT_APP_BASE_URL,
  APP_ID: process.env.REACT_APP_APP_ID,
  STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
};

export default envConfig;