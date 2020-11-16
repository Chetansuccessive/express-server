import { Request, Response, NextFunction } from 'express';
<<<<<<< HEAD

export default (req: Request, res: Response, next: NextFunction) => {
    next({
        error: 'NOT Found',
        code: 404
    });
=======
export default (req: Request, res: Response, next: NextFunction) => {
    next({
        error: 'Not Found',
        code: 404
    });

>>>>>>> bfb861569aea10ee0dbd384aede4726d950e9c9f
};