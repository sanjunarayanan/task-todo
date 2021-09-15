const express = require('express')
const ChildTask = require('../models/child-task')
const router = new express.Router()
const auth = require('../middleware/auth')


// create a child task by passing id of the main task 

router.post('/child-task', auth, async (req, res) => {
  const child = new ChildTask(req.body)
  try {
      await child.save()
      res.status(201).send(child)
  } catch (e) {
      res.status(400).send(e)
  }
})

// getting all the child task..
router.get('/child-task', auth, async (req, res) => {
  try {
      const childs =  await ChildTask.find({});
      console.log(childs)
      res.send(childs)
  } catch (e) {
      res.status(500).send()
  }
})



module.exports = router