const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },

  number: {
    type: String,
    validate: {
      validator: function(value) {
        return /^\d{2,3}-\d{7,}$/.test(value)
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
})

module.exports = mongoose.model('Person', personSchema)