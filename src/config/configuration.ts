import * as dotenv from 'dotenv';

console.log('Inside config');
console.log(dotenv);
const envVars: NodeJS.ProcessEnv = process.env;
const config = {
    env: envVars.NODE_ENV,
    mongo: envVars.MONGO_URL,
};
Object.freeze(config);

export default config;