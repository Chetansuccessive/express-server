class TraineeController {
    static instance: TraineeController

    static getInstance() {
        if(TraineeController.instance) {
            return TraineeController.instance

        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
        }
    get(req, res, next) {
        try {
            console.log("Inside get method of Trainee Controller");
                        res.send({
                message: "Trainees fetched succesfully",
                data: [
                    {
                        name: "Chetan",
                        address: "Noida"
                    }
                ]
            });
        } catch(err) {
            console.log("Inside err", err);

        }
    }
    create(req, res, next) {
        try {
            console.log("Inside get method of Trainee Controller");
                        res.send({
                message: "Trainees created succesfully",
                data: [
                    {
                        name: "Chetan",
                        address: "Noida"
                    }
                ]
            });
        } catch(err) {
            console.log("Inside err", err);
}



}
update(req, res, next) {
    try {
        console.log("Inside get method of Trainee Controller");
                    res.send({
            message: "Trainees updated succesfully",
            data: [
                {
                    name: "Chetan",
                    address: "Noida"
                }
            ]
        });
    } catch(err) {
        console.log("Inside err", err);

    }
}

delete(req, res, next) {
    try {
        console.log("Inside get method of Trainee Controller");
                    res.send({
            message: "Trainees deleted succesfully",
            data: [
                {
                    name: "Chetan",
                    address: "Noida"
                }
            ]
        });
    } catch(err) {
        console.log("Inside err", err);

    }
}

}


export default TraineeController.getInstance()