import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import validator from 'validator';
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;

const validateEmail = function(email) {
  if (email) return validator.isEmail(email);
  return true;
};

function omitUndefined(value) {
  return value === undefined ? '' : value;
}

//Create schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: [validateEmail, 'Please use a valid email address.'],
    default: '',
    set: omitUndefined
  },
  avatar: {
    type: String,
    required: true,
    default: null
  },
  title: {
    type: String,
    required: false,
    default: ""
  },
  headline: {
    type: String,
    required: false,
    default: ""
  },
  role: {
    type: Number,
    required: true,
    default: 0
  },
  fname: {
    type: String,
    required: false,
    default: ""
  },
  lname: {
    type: String,
    required: false,
    default: ""
  },
  birthday: {
    type: String,
    required: false,
    default: "1970-01-01"
  },
  username: {
    type: String,
    required: false,
    default: "New User"
  },
  password: {
    type: String,
    required: false,
    default: ""
  },
  // ---> For only Experts
  experiencedyear: {
    type: Number,
    required: true,
    default: 0
  },
  highlight: {
    type: Boolean,
    required: true,
    default: false
  },
  isverified: {
    type: Boolean,
    required: false,
    default: false
  },
  category: {
    type: String,
    required: true
  },
  expertbio: {
    type: String,
    required: false
  },
  expertschool: {
    type: String,
    required: false
  },
  expertresidency: {
    type: String,
    required: false
  },
  expertinternship: {
    type: String,
    required: false
  },
  expertdegree: {
    type: String,
    required: false
  },
  expertaward: {
    type: String,
    required: false
  },
  // <--- For only Experts
  paymentoption: {
    type: Schema.Types.ObjectId,
    ref: 'payment_option',
    required: false
  }
});

UserSchema.pre('findOneAndUpdate', function(next) {
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

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  // return candidatePassword == this.password;
  return bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

UserSchema.plugin(mongoosePaginate);
UserSchema.set('timestamps', true);
const User = mongoose.model('user', UserSchema);
module.exports = User;
