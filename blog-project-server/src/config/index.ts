import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

export default {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_DB_URL,
  saltRounds: process.env.salt_rounds,
  tokenSecret: process.env.jwt_secret,
};
