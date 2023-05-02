import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  databaseUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.LOCAL_DATABASE_URL
      : process.env.REMOTE_DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};

export default config;
