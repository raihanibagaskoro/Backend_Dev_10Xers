const router = require("express").Router()
const ProductController = require('../controllers/ProductController')
const UserController = require('../controllers/UserController')
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.get('/')

router.post('/login', UserController.login)

router.use(authentication)
router.get('/product', authorization, ProductController.getAll)
router.post('/product', authorization, ProductController.add)
router.get('/product/search', ProductController.search)
router.get('/product/:id', authorization, ProductController.getOne)
router.put('/product/:id', authorization, ProductController.edit)
router.delete('/product/:id', authorization, ProductController.delete)

module.exports = router