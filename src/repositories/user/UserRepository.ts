import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from './versionable/VersionableRepository';


export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

  constructor() {
    super(userModel);
  }

  public createUser(data, creator) {
    return super.createUser(data, creator);
  }

  public updateUser(id, data, updator) {
    return super.update(id, data, updator);
  }

  public getUser(data) {
    return super.getUser(data);
  }

  public deleteData(id, remover) {
    return super.delete(id, remover);
  }

  public findOne(data) {
    return super.findOne(data);
  }

  public counData() {
    return super.count();
  }
  public getallTrainee(skip, limit, sort) {
    return super.getallTrainee(skip, limit, sort);
}
}