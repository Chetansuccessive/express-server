interface  IUsers {


    traineeEmail: string;
    reviewerEmail: string ;

}





type access = {
    all: string[];
    read: string[];
    write: string[];
    Delete: string[];
};


interface IPermissions {
    getUsers: access;
    getDetails: access;
}

export { IUsers, IPermissions };