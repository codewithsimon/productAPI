const Product = require('../models/product')

const getAllProducts = async(req,res) =>{   
    const company = req.query
    const queryObject = {}

    // if(company){
    //     queryObject.company = {$regex: company, $options:'i'}
    // }

    const myData = await Product.find(req.query).sort('price')
    res.status(200).json({myData})
}
const getAllProductsTesting = async(req,res) =>{
    res.status(200).json({msg: 'I am getAllProductsTesting'})
}

module.exports = {getAllProducts, getAllProductsTesting}