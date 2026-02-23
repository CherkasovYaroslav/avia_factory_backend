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

exports.createClient = async(req,res,next) => {
        try{
        const newClient = await clientService.create(req.body);
        res.status(201).json(newClient);
    }catch(error){
        next(error)
    }
};

exports.updateClient = async(req,res,next) => {
        try{
        const updatedClient = await clientService.update(req.params.Id, req.body);
        res.json(updatedClient);
    }catch(error){
        next(error)
    }
};

exports.deleteClient = async(req,res,next) => {
        try{
        await clientService.delete(req.params.Id);
        res.json({message:"Client Deleted"});
    }catch(error){
        next(error)
    }
};

