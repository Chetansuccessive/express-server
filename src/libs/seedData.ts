import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import { config } from '../config';

const userRepository: UserRepository = new UserRepository();
export default async() => {
  userRepository.count()
    .then(res => {
      if (res === 0) {
        const saltRounds = 10;
        const password = config.PASSWORD;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
  console.log('Data seeding in progress');
  userRepository.createUser({
     name: 'Head Trainer',
   role: 'head-trainer',
   email: 'headtrainer@successive.tech',
   password: hash

  }, undefined);
  userRepository.createUser({
    id: 11,
     name: 'Trainee',
   role: 'trainee',
    email: 'trainee@successive.tech',
    password: hash
  }, undefined);
}
    })
    .catch(err => console.log(err));
  };