import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const ExtraCommentSchema = new Schema(
    {
        uid: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'user'
        },
        name: {
            type: String,
            required: false
        },
        files: [{
            type: Schema.Types.ObjectId,
            ref: 'attachments'
        }],
        message: {
            type: String,
            required: false
        },
        role: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

ExtraCommentSchema.plugin(mongoosePaginate);
const ExtraComment = mongoose.model('extracomment', ExtraCommentSchema);
module.exports = ExtraComment;
