import { Url } from 'url';

interface IConfig {
    KEY: any;
    PORT: number;
    NODE_ENV: string;
    MONGO_URL: Url;
    PASSWORD: string;
}
export { IConfig };