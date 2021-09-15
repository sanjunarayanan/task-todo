const mongoose = require('mongoose')
// mongoose makes it easy to manage and model your data..
// local mongodb set up 
// with a databse " task-todo "
mongoose.connect('mongodb://127.0.0.1:27017/task-todo', {
    useNewUrlParser: true
})