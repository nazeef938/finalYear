const { register, login } = require('../app/controllers/AuthController')

const router = require('express').Router()

router.post('/register',register)
router.post('/login',login)

router.get("/",(req,res) => {
    res.json("Success connection")
})

module.exports = router