const roleService = require("../services/roleService");

exports.getRoles = async(req,res,next) => {
    try{
        const sections = await roleService.getAllRoles();
        res.json(sections);
    }catch(error){
        next(error)
    }
};


exports.getRole = async(req,res,next) => {
    try{
        const section = await roleService.getRoleById(req.params.id);
        res.json(section);
    }catch(error){
        next(error)
    }
};

exports.createRole = async(req,res,next) => {
        try{
        const newSection = await roleService.createRole(req.body);
        res.status(201).json(newSection);
    }catch(error){
        next(error)
    }
};

exports.deleteRole = async(req,res,next) => {
        try{
        await roleService.deleteRole(req.params.id);
        res.json({message:"Deleted Role"});
    }catch(error){
        next(error)
    }
};
