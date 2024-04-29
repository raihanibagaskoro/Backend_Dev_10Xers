const { User } = require('../models')

async function authorization(req, res, next){
    try {
        const {id} = req.user
        const user = await User.findByPk(id)

        if (!user || user.role !== 'Admin'){
            return res.status(403).json({
                error: 'Unauthorized'
            })
        }

        next()
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Internal server error'
        })
    }
}

module.exports = authorization