import { Request, Response, NextFunction } from 'express';
class TraineeController {
    static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    get(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(`Inside Get route of Trainee Controller `);
            res.status(200).json({
                message: 'Trainee fetched Successfully',
                data: {
                    name: 'trainee',
                    branch: 'Noida'
                }
            });
        }
        catch (err) {
            console.log(`Error occured ${err}`);
        }
    }

    create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(`Inside Post route of Trainee Controller `);
            res.status(200).json({
                message: 'Trainee Added Successfully',
                data: {
                    id: req.body.id,
                    name: req.body.name
                }
            });
        }
        catch (err) {
            console.log(`Error occured ${err}`);
        }
    }

    update(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(`Inside Put route of Trainee Controller `);
            res.status(200).json({
                message: 'Trainee Updated Successfully',
                data: {
                    name: 'trainee',
                    branch: 'Noida'
                }
            });
        }
        catch (err) {
            console.log(`Error occured ${err}`);
        }
    }

    delete(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(`Inside delete route of Trainee Controller `);

            res.status(200).json({
                message: 'Trainee Deleted Successfully',
                data: {
                    name: 'trainee',
                    branch: 'Noida'
                }
            });
        }
        catch (err) {
            console.log(`Error occured ${err}`);
        }
    }

}
export default TraineeController.getInstance();