import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const ExpertCommentSchema = new Schema(
    {
        expertsId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        requestId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

ExpertCommentSchema.plugin(mongoosePaginate);
const ExpertComment = mongoose.model('expertcomment', ExpertCommentSchema);
module.exports = ExpertComment;
