import * as express from 'express';
import UserController from './Controllers';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions, user } from '../../libs/routes/Constants';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
const UserRouter = express.Router();
/**
 * @swagger
 *
 *  definitions:
 *      me:
 *        type: object
 *        properties:
 *          message:
 *              type: string
 *              example: Me
 *          status:
 *              type: string
 *              example: OK
 *          data:
 *              iss: Online JWT Builder
 *              iat: 1605048360
 *              exp: 1636584360
 *              name: skldjf
 *              email: skldjf@successive.tech
 *              role: trainee
 *      Login:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: trainee@successive.tech
 *          password:
 *              type: string
 *              example: training@123
 *      Token:
 *           type: object
 *           properties:
 *               status:
 *                   example: Ok
 *               message:
 *                   example: Success
 *               data:
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5laGEuZ29lbEBzdWNjZXNzaXZlLnRlY2giLCJpZCI6IjVlNGEzNmJjNjQ4MjRiMWY4MGI3MzBjZCIsImlhdCI6MTU4MjU0OTIyN30.cFV6YYlfmhJ1yL3GyIIgb-PjMTpDNVICd5KGi1ENpVI
 */


/**
 * @swagger
 *
 * /api/user/login:
 *   post:
 *     tags:
 *       - User
 *     description: Login Credentials!
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User email and password
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *              $ref: '#/definitions/Token'
 *       422:
 *         description: invalid email or password
 *         schema:
 *          oneOf:
 *          properties:
 *              status:
 *                  example: "200"
 *              message:
 *                  example: Password does not match
 *              err:
 *                  example: Password is incorrect
 */

UserRouter.route('/')
.post(authMiddleWare ( permissions.getUsers, 'all' ), UserController.create)
.put(authMiddleWare ( permissions.getUsers, 'all' ), UserController.update);
UserRouter.route('/:id')
.delete( authMiddleWare ( permissions.getUsers, 'all' ), UserController.remove);

/**
 * @swagger
 *
 * /api/user/me:
 *   get:
 *     tags:
 *       - User
 *     description: Current user Details.
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: skip
 *         description: Number of elements to skip
 *         in: query
 *         required: false
 *         type: number
 *       - name: limit
 *         description: number of elements to show
 *         in: query
 *         required: false
 *         type: number
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *             $ref: '#/definitions/me'
 */
UserRouter.route('/me')
.get(authMiddleWare ( permissions.getUsers, 'all' ), UserController.get);
UserRouter.route('/login')
.post( validationHandler ( config.login ), UserController.login );
UserRouter.get('/getall', authMiddleWare('getUsers', 'all'), validationHandler(config.get),
UserController.getAll);

export default UserRouter;