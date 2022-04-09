const { check } = require("express-validator");
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth = async (req,res,next) => {
  console.log("MIDDLEWARE AUTH")

  let {accessToken} = req.body
  if (!accessToken) {
    accessToken = req.header('Authorization')
  }
  
  if(!accessToken) {
    return res.json({message:"Unauthorized"}).status(400);
  }
  try {
    const jwtData = await jwt.verify(accessToken,process.env.SECRET_KEY)
    if(!jwtData) {
      return res.json({message:"Unauthorized"}).status(400);
    }
    req.user = jwtData.user
    next()
  } catch(err) {
    console.log(err.message)
    return res.json({message:"Unauthorized"}).status(400);
  }
}