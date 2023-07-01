import axios from 'axios';
import crypto from 'crypto';
import 'dotenv/config';

export const api = axios.create({
  baseURL: process.env.MARVEL_API_URL,
  params: {
    apikey: process.env.MARVEL_PUBLIC_API_KEY,
    ts: '1',
    hash: crypto
      .createHash('md5')
      .update(
        '1' +
          process.env.MARVEL_PRIVATE_API_KEY +
          process.env.MARVEL_PUBLIC_API_KEY,
      )
      .digest('hex'),
  },
});
