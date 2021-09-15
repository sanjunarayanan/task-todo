const jwt = require('jsonwebtoken')
const User = require('../models/user')


// Express middleware is nothing more than a function that runs as Express handles a given
// request. You can customize the function to do whatever you want it to do, and you can
// have it run whenever you want it to.


const auth = async (req, res, next) => {
try {

  // token can be getting from the authorization header ..

  const token = req.header('Authorization').replace('Bearer ', '')
  // the server can verify the toekn by using verify method by passing the SECREAT .. Here Secreate is "inapptestapi"
  const decoded = jwt.verify(token, 'inapptestapi')
  const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })
  if (!user) {
    throw new Error()
  }
  req.user = user
  req.token = token
  next()
} catch (e) {
res.status(401).send({ error: 'Please authenticate.' })
}
}

module.exports = auth