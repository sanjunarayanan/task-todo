const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
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


const Task = mongoose.model('Task', TaskSchema)
module.exports = Task