const mongoose = require('mongoose')
const Task = mongoose.model('Task', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    state: {
      type: String,
      required: true,
      enum: ["Pending", "In-Progress", "Completed"],
    },
    completionDate: {
      type: Date
    }
})

module.exports = Task