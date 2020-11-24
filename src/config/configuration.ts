import * as dotenv from 'dotenv';
import { IConfig } from './IConfig';

const enVars = dotenv.config();
const config = enVars.parsed;

export default config;
Object.freeze(config);
