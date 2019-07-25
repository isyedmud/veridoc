import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const RequestStatusSchema = new Schema(
    {
        status: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

RequestStatusSchema.plugin(mongoosePaginate);
RequestStatusSchema.set('timestamps', true);
const RequestStatus = mongoose.model('requeststatus', RequestStatusSchema);
module.exports = RequestStatus;
