// services
import User from '../models/user.model.js'
import db from '../config/db.js'
const getAll = () => {
  return db.users
};

const create = (user)=>{
  const newUser = new User({id:user.id, name:user.name, email:user.email});
  db.users.push(newUser);
  return newUser;
}

export default { getAll, create };
