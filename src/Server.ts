import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import routes from './router';
import Database from './libs/Database';

class Server {
    app;

    constructor(private config) {
        this.app = express();
    }

    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    public setupRoutes() {
        const { app } = this;
        app.use('/health-check', (req, res, next) => {
            console.log('Inside Second middleware');
            res.send('I am OK');
            next();

        });
        this.app.use('/api', routes);
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);

    }

    public initBodyParser() {
        this.app.use(bodyParser.json());
    }

    public run() {
        const { app, PORT, MONGO_URL } = this.config;
        Database.open('mongodb://localhost:27017/express-training')
            .then((res) => {
                console.log('Successfully connected to mongo');
                this.app.listen(PORT, (err) => {
                    console.log(`App is running on port ${PORT}`);
                });
            })
            .catch(err => console.log(err));

        return this;
    }
}

export default Server;
