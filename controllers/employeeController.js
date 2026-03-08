const employeeService = require("../services/employeeService");

exports.getEmployees = async(req,res,next) => {
    try{
        const employees = await employeeService.getAllEmployees();
        res.json(employees);
    }catch(error){
        next(error)
    }
};


exports.getEmployee = async(req,res,next) => {
    try{
        const employee = await employeeService.getEmployeeById(req.params.id);
        res.json(employee);
    }catch(error){
        next(error)
    }
};

exports.createEmployee = async(req,res,next) => {
        try{
        const newEmployee = await employeeService.create(req.body);
        res.status(201).json(newEmployee);
    }catch(error){
        next(error)
    }
};

exports.updateEmployee = async(req,res,next) => {
        try{
        const updatedEmployee = await employeeService.update(req.params.id, req.body);
        res.json(updatedEmployee);
    }catch(error){
        next(error)
    }
};

exports.deleteEmployee = async(req,res,next) => {
        try{
        await employeeService.delete(req.params.id);
        res.json({message:"Employee Deleted"});
    }catch(error){
        next(error)
    }
};