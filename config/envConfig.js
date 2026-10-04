import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.TEST_ENV || 'qa';

const envFile = path.resolve(`config/environments/.env.${environment}`);

dotenv.config({ path: envFile, override: true });

export const config = {
    environment,
    baseURL: process.env.BASE_URL,
    apiURL: process.env.API_URL,
    username: process.env.APP_USERNAME || process.env.USERNAME,
    password: process.env.APP_PASSWORD || process.env.PASSWORD
};