const router = require("express").Router()
const ProductController = require('../controllers/ProductController')

router.get('/')
router.get('/product', ProductController.getAll)
router.post('/product', ProductController.add)

module.exports = router