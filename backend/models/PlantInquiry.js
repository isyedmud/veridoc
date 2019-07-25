import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const PlantInquirySchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 120
  },
  information: {
    type: String,
    required: true,
    maxlength: 1000
  },
  submittedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  response: {
    type: String,
    default: null
  },
  responder: {
    type: Schema.Types.ObjectId,
    ref: 'admin',
    default: null
  },
  file: {
    type: String,
    required: true
  }
});

PlantInquirySchema.plugin(mongoosePaginate);
PlantInquirySchema.set('timestamps', true);
const PlantInquiry = mongoose.model('plantinquiries', PlantInquirySchema);
module.exports = PlantInquiry;
