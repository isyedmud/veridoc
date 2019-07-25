import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const UserRequestSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "user"
        },
        expert: {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "user"
        },
        category: {
            type: Number,
            required: true,
        },
        comments: {
            type: String,
            required: false,
            default: ""
        },
        extracomment: [{
            type: Schema.Types.ObjectId,
            required: false,
            ref: "extracomment"
        }],
        queries: {
            type: String,
            required: false,
            default: ""
        },
        status: {
            type: Number,
            required: true,
            default: 0
        },
        paymentOpts: {
            type: Schema.Types.ObjectId,
            ref: 'payment_option',
            required: false
        },
        paymentStatus: {
            type: Number,
            required: true,
            default: 0
        },
        isbehalfof: {
            type: Boolean,
            required: true,
        },
        /**
         * Behalfof request fields
         * name, relation, birthday, gender, country
         */
        behalfofname: {
            type: String,
            required: false,
        },
        behalfofrelation: {
            type: String,
            required: false,
        },
        behalfofbod: {
            type: String,
            required: false,
        },
        behalfofgender: {
            type: String,
            required: false,
        },
        behalfofcountry: {
            type: String,
            required: false,
        },
        files: [{
            type: Schema.Types.ObjectId,
            ref: 'attachments'
        }],
        expertCommentId: {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "expertcomment"
        },
        trackRequest: [{
            type: Schema.Types.ObjectId,
            required: false,
            ref: 'requeststatus'
        }]
    },
    {
        timestamps: true
    }
);

UserRequestSchema.plugin(mongoosePaginate);
UserRequestSchema.set('timestamps', true);
const UserRequest = mongoose.model('user_request', UserRequestSchema);
module.exports = UserRequest;
