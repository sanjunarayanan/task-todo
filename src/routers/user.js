const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require ('../middleware/auth')



// add new user
router.post('/users',  async (req, res) => {
  const user = new User(req.body)
  try {
      await user.save()
      const token = user.generateAuthToken()
      res.status(201).send({user,token})
  } catch (e) {
      res.status(400).send(e)
  }
})


// login user 
router.post('/users/login', async (req,res) =>{
  try {
      const user = await User.findByCredentials(req.body.email , req.body.password)
      const token = await user.generateAuthToken()
      res.send({user,token})
  } catch (error) {
      res.status(400).send()
  }
})


// log out a user and token will be cleared..
router.post('/users/logout',auth,async(req,res)=>{
  try {
      req.user.tokens = req.user.tokens.filter((token)=>{
          return token.token !==req.token
      })
      await req.user.save()
      res.send("user log out successfully..!")
  } catch (error) {
      res.status(500).send()
  }
})


module.exports = router

