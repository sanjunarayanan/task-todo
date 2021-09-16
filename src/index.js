const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const childRouter  = require('./routers/child-task')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(childRouter)





app.listen(port, () => {
    console.log('Server is up on port ' + port)
})