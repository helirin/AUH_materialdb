const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String, 
        required: true, 
        index: {
            unique: true  
        }
  },
  min_density: {
      type: Number,
      required: true
    },
    max_density: {
        type: Number,
        required: true
      },

 min_strenght: {
        type: Number,
        required: true
      },
max_strenght: {
        type: Number,
        required: true
      },
min_strenght_density: {
        type: Number,
        required: true
      },
 max_strenght_density: {
        type: Number,
        required: true
      }
  
});

module.exports = mongoose.model("material", schema);