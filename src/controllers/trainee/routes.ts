import { Router } from 'express';

import validation  from './validation';

import traineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import {IUsers , IPermissions} from '../../libs/routes/Interface'; 
const  permissions : IPermissions= {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: []
        },
        'getDetails': {
          all: ['head-trainer'],
          read : ['trainee', 'trainer'],
          write : ['trainer'],
          Delete: []
          }
    }

    const  users : IUsers[] =
    [
    {
      traineeEmail: 'trainee1@successive.tech',
      reviewerEmail: 'reviewer1@successive.tech',
   },

    {
      traineeEmail: 'prince.gola@successive.tech',
      reviewerEmail: 'reviewer.der@successive.tech',
   },

    {
      traineeEmail: 'trainee13@successive.tech',
      reviewerEmail: 'reviewer13@successive.tech',
    }
]
let {getUsers,getDetails}= permissions;
export {getUsers,getDetails,users}

const traineeRouter = Router();

traineeRouter.route('/')
.get(traineeController.get)
.post(traineeController.create)
.put(traineeController.update)
.delete(traineeController.delete);
export default traineeRouter; 