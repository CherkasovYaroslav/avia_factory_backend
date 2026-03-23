const productService = require("../services/productService");

exports.getProducts = async(req,res,next) => {
    try{
        const products = await productService.getAllProducts();
        res.json(products);
    }catch(error){
        next(error)
    }
};


exports.getProduct = async(req,res,next) => {
    try{
        const product = await productService.getProductById(req.params.id);
        res.json(product);
        console.log(product);
    }catch(error){
        next(error)
    }
};

exports.createProduct = async(req,res,next) => {
        try{
        const newProduct = await productService.createProduct(req.body);
        res.status(201).json(newProduct);
    }catch(error){
        next(error)
    }
};

exports.updateProduct = async(req,res,next) => {
        try{
        const updatedProduct = await productService.updateProduct(req.params.id, req.body);
        res.json(updatedProduct);
    }catch(error){
        next(error)
    }
};

exports.deleteProduct = async(req,res,next) => {
        try{
        await productService.deleteProduct(req.params.id);
        res.json({message:"Deleted Product"});
    }catch(error){
        next(error)
    }
};