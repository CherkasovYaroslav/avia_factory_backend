const orderService = require("../services/orderService");

exports.getOrders = async(req,res,next) => {
    try{
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }catch(error){
        next(error)
    }
};


exports.getOrder = async(req,res,next) => {
    try{
        const order = await orderService.getOrderById(req.params.id);
        res.json(order);
    }catch(error){
        next(error)
    }
};

exports.createOrder = async(req,res,next) => {
        try{
        const newOrder = await orderService.createOrder(req.body);
        res.status(201).json(newOrder);
    }catch(error){
        next(error)
    }
};

exports.updateOrder = async(req,res,next) => {
        try{
        const updatedOrder = await orderService.updateOrder(req.params.id, req.body);
        res.json(updatedOrder);
    }catch(error){
        next(error)
    }
};

exports.deleteOrder = async(req,res,next) => {
        try{
        await orderService.deleteOrder(req.params.id);
        res.json({message:"Deleted Order"});
    }catch(error){
        next(error)
    }
};