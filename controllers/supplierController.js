const supplierService = require("../services/supplierService");
exports.getClients = async(req,res,next) => {
    try{
        const suppliers = await supplierService.getAllSuppliers();
        res.json(suppliers);
    }catch(error){
        next(error)
    }
};


exports.getClient = async(req,res,next) => {
    try{
        const supplier = await supplierService.getSupplierById(req.params.Id);
        res.json(supplier);
    }catch(error){
        next(error)
    }
};


exports.createSupplier = async(req,res,next) => {
        try{
        const newSupplier = await supplierService.create(req.body);
        res.status(201).json(newSupplier);
    }catch(error){
        next(error)
    }
};

exports.updateSupplier = async(req,res,next) => {
        try{
        const updatedSupplier = await supplierService.update(req.params.Id, req.body);
        res.json(updatedSupplier);
    }catch(error){
        next(error)
    }
};

exports.deleteSupplier = async(req,res,next) => {
        try{
        await supplierService.delete(req.params.Id);
        res.json({message:"Supplier Deleted"});
    }catch(error){
        next(error)
    }
};