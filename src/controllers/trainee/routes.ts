import { Router } from 'express';

import validation  from './validation';

import traineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(validationHandler(validation.get),traineeController.get)
    .post(traineeController.create)
    .put(traineeController.update)
    .delete(traineeController.Delete);

export default traineeRouter;