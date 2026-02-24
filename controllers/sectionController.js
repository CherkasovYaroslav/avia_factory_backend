const sectionService = require("../services/sectionService");

exports.getSections = async(req,res,next) => {
    try{
        const sections = await sectionService.getAllSections();
        res.json(sections);
    }catch(error){
        next(error)
    }
};


exports.getSection = async(req,res,next) => {
    try{
        const section = await sectionService.getSectionById(req.params.Id);
        res.json(section);
    }catch(error){
        next(error)
    }
};

exports.createSection = async(req,res,next) => {
        try{
        const newSection = await sectionService.createSection(req.body);
        res.status(201).json(newSection);
    }catch(error){
        next(error)
    }
};

exports.updateSection = async(req,res,next) => {
        try{
        const updatedSection = await sectionService.updateSection(req.params.Id, req.body);
        res.json(updatedSection);
    }catch(error){
        next(error)
    }
};

exports.deleteSection = async(req,res,next) => {
        try{
        await sectionService.deleteSection(req.params.Id);
        res.json({message:"Deleted Section"});
    }catch(error){
        next(error)
    }
};