type access= {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
};
interface IPermissions {
    getUsers: access;
    getProducts: access;
}
interface IUsers {
    traineeEmail: string;
    reviewerEmail: string;
}
