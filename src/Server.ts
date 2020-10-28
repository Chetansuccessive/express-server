import * as express from 'express';
import * as bodyParser from 'body-parser';
import  { notFoundHandler, errorHandler} from './libs/routes';

class Server {
    app;
    constructor(private config) {
        this.app = express();

    }

    bootstrap() {
        this.initBodyParsar();
        this.setupRoutes();
        return this;
    }

      setupRoutes() {
        const { app } = this;
        app.get('/health-check', (req, res, next) => {
            res.send('I am Ok');
        });

        app.use(notFoundHandler);
        
        app.use(errorHandler);
        return this;
        }
         
        initBodyParsar(){
            const { app } = this;
            app.use(bodyParser.json({ type: 'application/*+json'}));

        }

          run () {
        const { app , config : { PORT }} = this;
        app.listen(PORT, (err) => {
            if (err) {
            console.log(err);
            }
            console.log(`App is running ${PORT}`);
        });

    }

}

export default Server;