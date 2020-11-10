import { Router } from 'express';

import traineeController from './Controllers';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
import { authMiddleware } from '../../libs/routes';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(authMiddleware('getUser', 'read'), validationHandler(validation.get), traineeController.get)
    .post(authMiddleware('getUser', 'write'), validationHandler(validation.create), traineeController.create)
    .put(authMiddleware('getUser', 'write'), validationHandler(validation.update), traineeController.update)
    .delete(authMiddleware('getUser', 'delete'), validationHandler(validation.delete), traineeController.delete);

export default traineeRouter;