const mongoose = require('mongoose')
const ChildTaskSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
    },
    state: {
      type: String,
      required: true,
      enum: ["Pending", "In-Progress", "Completed"]
    },
    completionDate: {
      type: Date
    },
    ParentTask:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'Task'
    },
    }

)


const ChildTask = mongoose.model('ChildTask', ChildTaskSchema)
module.exports = ChildTask