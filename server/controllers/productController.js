const cloudinary = require('cloudinary').v2;
const productModel = require('../models/productModel.js');

//Function for adding Product
const addProduct = async(req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, bestseller} = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) =>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.status(201).json({success: true, message: 'Product Added'});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

//Function for listing Product
const getProducts = async(req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json({success: true, products});
    } catch (error) {
        console.log(error);
        res.status(404).json({success: false, message: error.message});
    }
}

//Function for removing Product
const removeProduct = async(req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.status(200).json({success: true, message: "Product Deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

//Function for listing single Product
const getProductById = async(req, res) => {
    try {
        const product = await productModel.findById(req.body.id);
        res.status(200).json({success: true, product});
    } catch (error) {
        console.log(error);
        res.status(404).json({success: false, message: error.message});
    }
}

module.exports = {addProduct, getProducts, removeProduct, getProductById};