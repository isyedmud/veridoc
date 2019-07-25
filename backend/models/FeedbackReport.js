import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const FeedbackReportSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 120
  },
  information: {
    type: String,
    maxlength: 1000,
    required: true
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
  }
});

FeedbackReportSchema.plugin(mongoosePaginate);
FeedbackReportSchema.set('timestamps', true);
const FeedbackReport = mongoose.model('feedbackreports', FeedbackReportSchema);
module.exports = FeedbackReport;
