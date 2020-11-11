import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
  console.log('Data seeding in progress');
  userRepository.create({ name: 'Head Trainer', role: 'head-trainer', email: 'headtrainer@successive.tech' });
  userRepository.create({ name: 'Trainee', role: 'trainee', email: 'trainee@successive.tech' });
};