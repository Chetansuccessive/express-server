import * as jwt from 'jsonwebtoken';

import hasPermissions from './Permissions';
import IRequest from '../../IRequest';
import{ Response, NextFunction } from 'express';

export default (module: any, permissinType: string) => (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log('the config is:-', module, permissinType);
        const token = req.headers.authorization;
        console.log('Header is:-', token);
        const decodeUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log('User', decodeUser.result);
        req.userData = decodeUser.result;
        console.log(decodeUser.result.role);
        const result = hasPermissions(module, decodeUser.result.role, permissinType);
        if (result === true)
            next();
        else {
            next({
                error: 'Unauthorized Access',
                message: 403
            });
        }
    } catch (err) {
        next({
            error: 'Unauthorized Access',
            message: 403
        });
    }
};