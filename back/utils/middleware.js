const jwt = require('jsonwebtoken')
const { SECRET } = require('./config')
const User = require('../models/user')

const extractToken = (req, res, next) => {
    const authorization = req.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        req.token = authorization.substring(7)
    }else{
        req.token = null
    }

    next()
}

const extractUser = async (req, res, next) => {
    const token = req.token
    if(token){
        const decodedToken = jwt.verify(token, SECRET)
        if(decodedToken.id){
            const user = await User.findById(decodedToken.id)
            if(user){
                req.user = user
            }
        }
    }

    next()
}

module.exports = {
    extractToken,
    extractUser
}