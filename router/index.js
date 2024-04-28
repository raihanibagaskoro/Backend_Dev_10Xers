const router = require("express").Router()
const ProductController = require('../controllers/ProductController')

router.get('/')
router.get('/product', ProductController.getAll)
router.get('/product/:id', ProductController.getOne)
router.put('/product/:id', ProductController.edit)
router.post('/product', ProductController.add)
router.delete('/product/:id', ProductController.delete)

module.exports = router