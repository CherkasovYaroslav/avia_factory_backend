const supplierService = require("../services/supplierService");
exports.getSuppliers = async(req,res,next) => {
    try{
        const suppliers = await supplierService.getAllSuppliers();
        res.json(suppliers);
    }catch(error){
        next(error)
    }
};


exports.getSupplier = async(req,res,next) => {
    try{
        const supplier = await supplierService.getSupplierById(req.params.id);
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
        const updatedSupplier = await supplierService.update(req.params.id, req.body);
        res.json(updatedSupplier);
    }catch(error){
        next(error)
    }
};

exports.deleteSupplier = async(req,res,next) => {
        try{
        await supplierService.delete(req.params.id);
        res.json({message:"Supplier Deleted"});
    }catch(error){
        next(error)
    }
};

exports.getSupplierSectionsAndDetails = async (req, res, next) => {
    try {
        const data = await supplierService.getSupplierSectionsAndDetails(req.params.id);
        res.json(data);
    } catch (error) {
        next(error);
    }
};
