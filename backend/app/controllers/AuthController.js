const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require("../models/User")
require('dotenv').config()

exports.login = async (req,res) => {
    try {
        let {email,password} = req.body
        console.log(email,password)
        let user = await User.findOne({email:email})
        if(!user) {
            throw "Invalid username or password"
        }
        console.log("1")
        let verifyPassword = await bcrypt.compare(password,user.password)
        if(!verifyPassword) {
            throw "Invalid username or password"
        }
        console.log("2")
        const payload = {
            user: {
                id:user._id,
                name: user.name,
                email: user.email,
                type: user.type
            },
        }
        console.log("3")
        let accessToken = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 30*60*60 })
        console.log("4")
        return res.status(200).json({message:"Login successfuly",user:payload.user,accessToken,status:'success'})
    } catch (err) {
        return res.status(200).json({message:"Some error occurred",error:err,status:'error'})
    }
}

exports.register = async (req,res) =>{
    try {
        let {name,email,password} = req.body;
        let existingUser = await User.findOne({email:email});
        
        if(existingUser) {
            throw "User already registered"
        }
        let hash = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password,hash)
        let newUser = User({
            name:name,
            email:email,
            password:password,
            type: 2
        })
        await newUser.save()
        return res.json({message:"User registered successfully",status:'success'})
    } catch (err) {
        return res.status(200).json({message:"Some error occurred",error:err,status:'error'})
    }
}