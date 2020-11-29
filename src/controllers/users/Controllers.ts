import { Request, Response, NextFunction } from 'express';
import IRequest from '../../IRequest';
import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';
import * as bcrypt from 'bcrypt';

class UserController {
    userRepository: UserRepository = new UserRepository();
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    public async get(req: IRequest, res: Response, next: NextFunction) {
        const user = new UserRepository();
        const { id } = req.query;
        await user.getUser({ id })
            .then((data) => {
                if (data === null) {
                    throw undefined;
                }
                console.log(data);
                res.status(200).send({
                    message: 'User fetched successfully',
                    data,
                    code: 200
                });
            })
            .catch(err => {
                console.log(err);
                res.send({
                    error: 'User not found',
                    code: 500
                });
            });
    }

    public async create(req: IRequest, res: Response, next: NextFunction) {

        console.log(`Inside Post/Create route of User Controller`);
        const { id, email, name, role, password } = req.body;
        const creator = req.userData._id;
        const user = new UserRepository();
        await user.createUser({ email, name, role, password }, creator)
            .then(() => {
                console.log(req.body);
                res.send({
                    message: 'User Added/created Successfully',
                    data: {
                        'name': name,
                        'email': email,
                        'role': role,
                        'password': password
                    },
                    code: 200
                });
            });
    }
    public async getAll(req: Request, res: Response, next: NextFunction) {
        let skip: number;
        let limit: number;
        let sort: boolean;

        if ('limit' in req.query) {
            limit = Number(req.query.limit);
        } else {
            limit = 10;
        }
        if ('skip' in req.query) {
            skip = Number(req.query.limit);
        } else {
            skip = 0;
        }
        if ('sort' in req.query) {
            sort = true;
        } else {
            sort = false;
        }

        const user = new UserRepository();
        await user.getallTrainee(skip, limit, sort)
        .then((data) => {
            res.status(200).send({
                message: 'Trainees fetched successfully',
                'count': data[1],
                'data': data
            });
        })
        .catch((err) => {
            res.send({
                message : 'Unable to fetch Trainees',
                status : 404
            });
        });
    }


    public async update(req: IRequest, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        console.log('id', id);
        console.log('dataToUpdate', dataToUpdate);
        const updator = req.userData._id;
        const user = new UserRepository();
        await user.updateUser(id, dataToUpdate, updator)
            .then((result) => {
                res.send({
                    data: result,
                    message: 'User updated Successfully',
                    code: 200
                });
            })
            .catch((err) => {
                res.send({
                    error: 'User Not Found for update',
                    code: 404
                });
            });
    }

    public async remove(req: IRequest, res: Response, next: NextFunction) {
        const id = req.params.id;
        const remover = req.userData._id;
        const user = new UserRepository();
        await user.deleteData(id, remover)
            .then((result) => {
                res.send({
                    message: 'User deleted Successfully',
                    code: 200
                });
            })
            .catch((err) => {
                res.send({
                    message: 'User not found to be deleted',
                    code: 404
                });
            });
    }

    public async login(req: IRequest, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const user = new UserRepository();
            const userData = await user.getUser({ email });
            if (userData) {
                const { password } = userData;
                bcrypt.compare(req.body.password, password, (err, result) => {
                    console.log(req.body.password);
                    console.log(password);
                    if (err) { throw (err); }
                    if (result) {
                        const token = jwt.sign(userData.toJSON(), config.KEY, {
                            expiresIn: '15m',
                        });
                        console.log(token);
                        res.send({
                            'token': token,
                            message: 'Login Permited',
                            status: 200
                        });
                    }
                    else {
                        res.send({
                            message: 'Invalid Password',
                            status: 401
                        });
                    }
                });
            }

            else {
                res.send({
                    message: 'Email is not Registered',
                    status: 404
                });
            }
        }
        catch (err) {
            res.send(err);
        }
    }

    public async me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.userData;
        console.log(data);
        res.json({
            data
        });
    }
}

export default new UserController();