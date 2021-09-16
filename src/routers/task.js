const express = require('express')
const Task = require('../models/task')
const router = new express.Router()
const auth = require('../middleware/auth')
const ChildTask = require('../models/child-task')



// create a task only when the user is authenticated ...

router.post('/tasks', auth, async (req, res) => {
  const task = new Task(req.body)
  try {
      await task.save()
      res.status(201).send(task)
  } catch (e) {
      res.status(400).send(e)
  }
})

// get all the tasks ...

router.get('/tasks', auth, async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})


// delete a task ...
// router.delete('/tasks/:id', async (req, res) => {
//   const _id = req.params.id
//   try {
//       var child  = await ChildTask.find({ParentTask : req.params.id})
//       child.forEach((child)=>{
//           if(child.state === "Pending" || child.state === "Completed"){
//             Task.remove({_id});
//             res.send("task removed..")
//           }
//       })
      
//   } catch (e) {
//       res.status(500).send()
//   }
// })

module.exports = router

