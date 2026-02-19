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
        const supplier = await supplierService.getSupplierById(req.params.Id);
        res.json(supplier);
    }catch(error){
        next(error)
    }
};

