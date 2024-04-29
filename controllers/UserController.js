const { User } = require('../models')
const bcrypt = require('bcryptjs')
const { createToken } = require('../helpers')

class UserController {
    static async login(req, res, next){
        try {
            const { username, password } = req.body
            const user = await User.findOne({ where: { username } })
            if (!user){
                return res.status(401).json({
                    error: 'Invalid username or password'
                })
            }
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (!isPasswordValid){
                return res.status(401).json({
                    error: 'Invalid username or password'
                })
            }
            const access_token = createToken({
                id: user.id, username: user.username
            })
            res.status(200).json({access_token})
        } catch (error) {
            console.error(error)
            res.status(500).json({
                error: 'Internal server error'
            })
        }
    }
}

module.exports = UserController