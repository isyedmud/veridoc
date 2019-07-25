import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const CharitySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 120
  },
  website: {
    type: String,
    maxlength: 300,
    required: true
  }
});

CharitySchema.plugin(mongoosePaginate);
const Charity = mongoose.model('charities', CharitySchema);
module.exports = Charity;
