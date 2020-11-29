import * as express from 'express';
import UserController from './Controllers';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions, user } from '../../libs/routes/Constants';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
const UserRouter = express.Router();
UserRouter.route('/')
.post(authMiddleWare ( permissions.getUsers, 'all' ), UserController.create)
.put(authMiddleWare ( permissions.getUsers, 'all' ), UserController.update);
UserRouter.route('/:id')
.delete( authMiddleWare ( permissions.getUsers, 'all' ), UserController.remove);
UserRouter.route('/me')
.get(authMiddleWare ( permissions.getUsers, 'all' ), UserController.get);
UserRouter.route('/login')
.post( validationHandler ( config.login ), UserController.login );
export default UserRouter;