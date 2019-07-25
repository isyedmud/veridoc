import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const PaymentOptionSchema = new Schema({
  method: {
    type: Number,
    required: false,
  },
  accountholdername: {
    type: String,
    required: false,
  },
  accountnumber: {
    type: String,
    required: false,
  },
  ifsccode: {
    type: String,
    required: false,
  },
  bankname: {
    type: String,
    required: false,
  },
  bankaddress: {
    type: String,
    required: false,
  },
  userid: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user"
  }
});

PaymentOptionSchema.plugin(mongoosePaginate);
const PaymentOption = mongoose.model('payment_option', PaymentOptionSchema);
module.exports = PaymentOption;
