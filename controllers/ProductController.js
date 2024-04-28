const {Product} = require('../models')

class ProductController {
    static async getAll(req, res, next){
        try {
            const products = await Product.findAll()
            res.status(200).json(products)
        } catch (error) {
            next(error)
        }
    }
    static async getOne(req, res, next){
        try {
            const id = +req.params.id
            const product = await Product.findByPk(id)
            if (!product){
                throw {message: 'Product not found'}
            }
            res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    }
    static async add(req, res, next){

    }
    static async edit(req, res, next){

    }
    static async delete(req, res, next){
        
    }
}

module.exports = ProductController