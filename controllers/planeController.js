const planeService = require("../services/planeService");

exports.getPlanes = async(req,res,next) => {
    try{
        const planes = await planeService.getAllPlanes();
        res.json(planes);
    }catch(error){
        next(error)
    }
};


exports.getPlane = async(req,res,next) => {
    try{
        const plane = await planeService.getPlaneById(req.params.Id);
        res.json(plane);
    }catch(error){
        next(error)
    }
};

exports.createPlane = async(req,res,next) => {
        try{
        const newPlane = await planeService.createPlane(req.body);
        res.status(201).json(newPlane);
    }catch(error){
        next(error)
    }
};

exports.updatePlane = async(req,res,next) => {
        try{
        const updatedPlane = await planeService.updatePlane(req.params.Id, req.body);
        res.json(updatedPlane);
    }catch(error){
        next(error)
    }
};

exports.deletePlane = async(req,res,next) => {
        try{
        await planeService.deletePlane(req.params.Id);
        res.json({message:"Deleted Plane"});
    }catch(error){
        next(error)
    }
};