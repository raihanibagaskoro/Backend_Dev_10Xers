const {Product, sequelize} = require('../models')
const { Op } = require('sequelize')

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
        try {
            const { productName, price } = req.body
            const newProduct = await Product.create({
                productName, price
            })
            res.status(201).json(newProduct)
        } catch (error) {
            next(error)
        }
    }
    static async edit(req, res, next){
        try {
            const id = +req.params.id
            const { productName, price } = req.body
            const product = await Product.findByPk(id)
            if (!product) {
                return res.status(404).json({
                    error: 'Product not found'
                })
            }
            await Product.update({
                productName, price
            },
            {
                where: {id}
            })
            res.status(200).json({
                message: 'Product updated successfully'
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                error: 'Internal server error'
            })
        }
    }
    static async search(req, res, next){
        try {
            const { productName } = req.query
            console.log(productName);
            const products = await Product.findAll({
                where: {
                    productName: {
                        [Op.iLike]: `%${productName}%` //case-insensitive search
                    }
                }
            })
            res.status(200).json(products)
        } catch (error) {
            next(error)
        }
    }
    static async delete(req, res, next){
        
    }
}

module.exports = ProductController