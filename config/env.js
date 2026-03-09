import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });


export const {
  PORT=5500,
  NODE_ENV="development",
  DB_URI='mongodb+srv://auth:1234@cluster0.a0okswi.mongodb.net/?appName=Cluster0',
  ACCESS_TOKEN_EXPIRE_DATE='15m',
  REFRESH_TOKEN_EXPIRE_DATE='7d',
  ACCESS_TOKEN_PUBLIC_KEY=process.env.ACCESS_TOKEN_PUBLIC_KEY,
  ACCESS_TOKEN_PRIVATE_KEY=process.env.ACCESS_TOKEN_PRIVATE_KEY,
  REFRESH_TOKEN_PUBLIC_KEY=process.env.REFRESH_TOKEN_PUBLIC_KEY,
  REFRESH_TOKEN_PRIVATE_KEY=process.env.REFRESH_TOKEN_PRIVATE_KEY,
} = {
  ...process.env,
  ACCESS_TOKEN_PUBLIC_KEY: process.env.ACCESS_TOKEN_PUBLIC_KEY?.replace(/\\n/g, '\n'),
  ACCESS_TOKEN_PRIVATE_KEY: process.env.ACCESS_TOKEN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  REFRESH_TOKEN_PUBLIC_KEY: process.env.REFRESH_TOKEN_PUBLIC_KEY?.replace(/\\n/g, '\n'),
  REFRESH_TOKEN_PRIVATE_KEY: process.env.REFRESH_TOKEN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};