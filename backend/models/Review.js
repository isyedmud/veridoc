import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
    {
        review: {
            type: String,
            required: true
        },
        mark: {
            type: Number,
            required: true
        },
        expertsId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "user"
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "user"
        },
        requestId: {
            type: Schema.Types.ObjectId,
            required: true
        }
    },
    {
        timestamps: true
    }
);

ReviewSchema.plugin(mongoosePaginate);
const Review = mongoose.model('review', ReviewSchema);
module.exports = Review;
