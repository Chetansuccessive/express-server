import { Router } from 'express';

import validation  from './validation';

import traineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';

const traineeRouter = Router();

traineeRouter.route('/')
.get(traineeController.get)
.post(traineeController.create)
.put(traineeController.update)
.delete(traineeController.Delete)
.get(validationHandler(validation.get), traineeController.get)
.post(validationHandler(validation.create), traineeController.create)
.put(validationHandler(validation.update), traineeController.update)
.delete(validationHandler(validation.Delete), traineeController.Delete);

export default traineeRouter;