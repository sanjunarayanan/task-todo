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
      res.send(childs)
  } catch (e) {
      res.status(500).send()
  }
})

// update task 

router.patch('/child-task/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'state','completionDate']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
  }
  try {
      const child = await ChildTask.findOne({ _id: req.params.id })
      if (!child) {
        return res.status(404).send()
      }
      updates.forEach((update) => child[update] = req.body[update])
      await child.save()
      res.send(child)
      
  } catch (e) {
      res.status(400).send(e)
  }
})




router.delete('/child-task/:id', async (req, res) => {
  try {
      const task = await Task.findByIdAndDelete(req.params.id)
      if (!task) {
          res.status(404).send()
      }
      res.send(task)
  } catch (e) {
      res.status(500).send()
  }
})



module.exports = router