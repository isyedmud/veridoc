import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const PlantOfDaySchema = new Schema({
  plant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'hc_plant'
  },
  common_name: {
    type: Schema.Types.ObjectId,
    ref: 'hc_common_name'
  },
  day: {
    type: Number,
    default: 1,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});

PlantOfDaySchema.plugin(mongoosePaginate);
const PlantOfDay = mongoose.model(
  'hc_plantofday',
  PlantOfDaySchema
);

module.exports = PlantOfDay;