import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import routes from './router';
import Database from './libs/Database';
import * as swaggerUI from 'swagger-ui-express';
import * as swaggerDocument from 'swagger-jsdoc';


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

    initSwagger = () => {
        const options = {
            definition: {
                info: {
                    title: 'JavaScript-Server API Swagger',
                    version: '1.0.0',
                },
                securityDefinitions: {
                    Bearer: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'headers'
                    }
                }
            },
            basePath: '/api',
            swagger: '4.1',
            apis: ['./src/controllers/**/routes.ts'],
        };
        const swaggerSpec = swaggerDocument(options);
        return swaggerSpec;
    }

    public setupRoutes() {
        const { app } = this;
        this.app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
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
