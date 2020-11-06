import * as express from 'express';
import UserController from './Controller';

const UserRouter = express.Router();

UserRouter.route('/')
.get( UserController.get)
.post( UserController.create)
.put( UserController.update)
.delete( UserController.delete);

export default UserRouter; 