const router = require("express").Router()
const ProductController = require('../controllers/ProductController')
const UserController = require('../controllers/UserController')

router.get('/')

router.post('/login', UserController.login)

router.get('/product', ProductController.getAll)
router.post('/product', ProductController.add)
router.get('/product/search', ProductController.search)
router.get('/product/:id', ProductController.getOne)
router.put('/product/:id', ProductController.edit)
router.delete('/product/:id', ProductController.delete)

module.exports = router