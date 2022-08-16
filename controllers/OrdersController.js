const Orders = require('../models/OrdersModel')



//createOrder
const createOrder = (req, res) => {
    const { order_code, order_type, order_status, products, quantity, total_price } = req.body

    client.query(
        'INSERT INTO Orders(order_code, order_type, order_status, products, quantity, total_price) VALUES( $1, $2, $3, $4, $5, $6)',
        [order_code, order_type, order_status, products, quantity, total_price],
        (err, results) => {
            if (err) {
                throw (err)
            }
            res.status(201).send(`Order added with ID: ${results.insertId}`)
        }
    )
}

//getOrderbyId
const getOrderbyId = (req, res) => {
    const id = parseInt(req.params.id)
    client.query('SELECT * FROM Orders WHERE id = $1 ', [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

//getOrderbyOrderCode
const getOrderbyOrderCode = (req, res) => {
    const order_code = parseInt(req.params.id)
    client.query('SELECT * FROM Orders WHERE order_code = $1 ', [order_code], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

//getOrderbyOrderType
const getOrderbyOrderType = (req, res) => {
    const order_type = parseInt(req.params.id)
    client.query('SELECT * FROM Orders WHERE order_type = $1 ', [order_type], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

//getOrderbyStatus
const getOrderbyStatus = (req, res) => {
    const order_status = parseInt(req.params.id)
    client.query('SELECT * FROM Orders WHERE order_status = $1 ', [order_status], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

//updateOrder
const updateOrder = (req, res) => {
    const id = parseInt(req.params.id)
    const { order_code, order_type, order_status, products, quantity, total_price } = req.body

    client.query(
        'UPDATE Orders SET order_code=$1, order_type=$2, order_status=$3, products=$4, quantity=$5, total_price=$6 WHERE id=$7',
        [order_code, order_type, order_status, products, quantity, total_price, id],
        (err, results) => {
            if (err) {
                throw (err)
            }
            res.status(200).send(`Order modified with ID: ${id}`)
        }
    )
}


//deleteOrder
const deleteOrder = (req, res) => {
    const id = parseInt(req.params.id)

    client.query('DELETE FROM Orders WHERE id=$1', [id], (err, results) => {
        if (err) {
            throw (err)
        }
        res.status(200).send(`Order deleted with ID: ${id}`)
    })
}

module.exports = {
    createOrder,
    getOrderbyId,
    getOrderbyOrderCode,
    getOrderbyOrderType,
    getOrderbyStatus,
    updateOrder,
    deleteOrder,
}