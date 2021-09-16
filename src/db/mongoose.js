const mongoose = require('mongoose')
// mongoose makes it easy to manage and model your data..
// local mongodb set up 
// with a databse " task-todo "
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})