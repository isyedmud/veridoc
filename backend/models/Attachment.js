import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const AttachmentSchema = new Schema(
    {
        filename: {
            type: String,
            required: true
        },
        originalname: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

AttachmentSchema.plugin(mongoosePaginate);
AttachmentSchema.set('files', true);
const Attachment = mongoose.model('attachments', AttachmentSchema);
module.exports = Attachment;
