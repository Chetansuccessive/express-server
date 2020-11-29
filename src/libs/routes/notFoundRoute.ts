import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    next({
        error: 'NOT Found',
        code: 404
    });
};