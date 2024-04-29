const router = require("express").Router()
const ProductController = require('../controllers/ProductController')
const UserController = require('../controllers/UserController')
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.get('/')

router.post('/login', UserController.login)

router.use(authentication)
router.get('/product', ProductController.getAll)
router.post('/product', ProductController.add)
router.get('/product/search', ProductController.search)
router.get('/product/:id', ProductController.getOne)
router.put('/product/:id', ProductController.edit)
router.delete('/product/:id', ProductController.delete)

module.exports = router