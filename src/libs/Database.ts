import { rejects } from 'assert';
import * as mongoose from 'mongoose';
import seedData from './seedData';

class Database {
    static open(mongoURL) {

        return new Promise((resolve, reject) => {
        console.log('Inside open method');
        mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log('Connected to mongo successfully');
            seedData();
            resolve();
        });
    });
    }
    static disconnect() {
        mongoose.disconnect(err => {
            if (err) {
                console.log('err');
            }
            console.log('Database Disconnected');

        });
    }
}

export default Database;