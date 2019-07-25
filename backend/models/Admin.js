import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import bcrypt from 'bcryptjs';
import CONFIG from './../config';
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;

//Create schema
const AdminSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  authenticationToken: { type: String, required: false, default: null },
  password: { type: String, required: true },
  name: {
    type: String,
    required: false,
    default: null
  },
  avatar: {
    type: String,
    required: false,
    default: null
  },
  access_type: {
    type: String,
    enum: ['FULL_ADMIN', 'PLANT_EXPERT', 'ANALYTICS'],
    default: 'FULL_ADMIN'
  }
});

AdminSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) => {
    if (error) return next(error);
    return bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  });
});

AdminSchema.pre('findOneAndUpdate', function(next) {
  const user = this._update.$set;
  return bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) => {
    if (error) return next(error);
    if (user.password !== undefined) {
      return bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        return next();
      });
    }else{
      return next()
    }
  });
});

AdminSchema.methods.comparePassword = function(candidatePassword, cb) {
  // return candidatePassword == this.password;
  return bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

AdminSchema.plugin(mongoosePaginate);
AdminSchema.set('timestamps', true);
const Admin = mongoose.model('admin', AdminSchema);
module.exports = Admin;
