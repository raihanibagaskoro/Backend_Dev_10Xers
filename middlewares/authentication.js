const { verifyToken } = require('../helpers')
const {User} = require('../models')

async function authentication(req, res, next){
    try {
        const { access_token } = req.headers
        const payload = verifyToken(access_token)
        const findUser = await User.findByPk(payload.id)
        if (!findUser){
            return res.status(401).json({ 
                error: 'Unathorized'
            })
        }
        req.user = {
            id: findUser.id,
            username: findUser.username,
            role: findUser.role
        }
        next()
    } catch (error) {
        console.error(error)
        res.status(403).json({
            error: 'Forbidden'
        })
    }
}

module.exports = authentication