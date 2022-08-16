const { name } = require('ejs')
const Products = require('../models/ProductsModel')

//createProduct
const cretaProduct = (req, res) => {
    const { product_code, product_name, price } = req.body

    client.query(
        'INSERT INTO Products(product_code, product_name, price',
        [product_code, product_name, name],
        (err, results) => {
            if (err) {
                throw (err)
            }
            res.status(201).send(`Product added with ID: ${results.insertId}`)
        }
    )
}

//getProductbyId
const getProductbyId = (req, res) => {
    const id = parseInt(req.params.id)

    client.query(
        'SELECT * FROM Products WHERE id = $1',
        [id],
        (err, results) => {
            if (err) {
                throw (err)
            }
            res.status(200).json(results.row)
        }
    )
}

//getProductbyCode
const getProductbyCode = (req, res) => {
    const product_code = req.body

    client.query(
        'SELECT * FROM Products WHERE product_code = $1',
        [product_code],
        (err, results) => {
            if (err) {
                throw (err)
            }
            res.status(200).json(results.row)
        }
    )
}

//getProductbyName
const getProductbyName = (req, res) => {
    const product_name = req.body

    client.query(
        'SELECT * FROM Products WHERE product_code = $1',
        [product_name],
        (err, results) => {
            if (err) {
                throw (err)
            }
            res.status(200).json(results.row)
        }
    )
}

//updateProduct
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id)
    const { product_code, product_name, price } = req.body

    client.query(
        'UPDATE Products SET product_code=$1, product_name=$2, price=$3 WHERE id=$4',
        [product_code, product_name, price, id],
        (err, results) => {
            if (err) {
                throw (err)
            }
            res.status(200).send(`Product modified with Id:${id}`)
        }
    )
}

//deleteProduct
const deleteProduct = (res, req) => {
    const id = parseInt(req.params.id)

    client.query(
        'DELETE FROM Products WHERE Id=$1',
        [id],
        (err, results) => {
            if (err) {
                throw (err)
            }
            res.status(200).send(`Product deleted with Id: ${id}`)
        }
    )
}