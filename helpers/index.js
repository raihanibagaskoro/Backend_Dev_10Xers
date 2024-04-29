const jwt = require('jsonwebtoken')

function createToken(payload){
    return jwt.sign(payload, "secret")
}

module.exports = {createToken}