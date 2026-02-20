const clientService = require("../services/clientService");
exports.getClients = async(req,res,next) => {
    try{
        const clients = await clientService.getAllClients();
        res.json(clients);
    }catch(error){
        next(error)
    }
};


exports.getClient = async(req,res,next) => {
    try{
        const client = await clientService.getClientById(req.params.Id);
        res.json(client);
    }catch(error){
        next(error)
    }
};