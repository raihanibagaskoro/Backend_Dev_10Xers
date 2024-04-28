const router = require("express").Router()
const ProductController = require('../controllers/ProductController')

router.get('/')
router.get('/product', ProductController.getAll)
router.post('/product', ProductController.add)
router.get('/product/search', ProductController.search)
router.get('/product/:id', ProductController.getOne)
router.put('/product/:id', ProductController.edit)
router.delete('/product/:id', ProductController.delete)

module.exports = router