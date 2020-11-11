import { Request, Response, NextFunction } from 'express';

export default (err, req: Request, res: Response, next: NextFunction) => {
<<<<<<< HEAD
    console.log(`Error is ${err.err}`);
    res.send({
        'error': err.err,
        'message': err.code,
        'status': err.message || 'Error',
        timeStamp: new Date()
    });
};
=======
    console.log(err);
    res.json(
        {
            error: err.error,
            status: err.code,
            message: err. message || Error ,
            timestamp: new Date()
        }
    );

    };
>>>>>>> bfb861569aea10ee0dbd384aede4726d950e9c9f
