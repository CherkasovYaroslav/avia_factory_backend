const db = require("../config/db");

exports.getAllPlanes = async () => {
        const [rows] = await db.query("SELECT *FROM `plane`");
        return rows; 
};

exports.getPlaneById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `plane` WHERE Id=?",[Id]);
        return rows[0]; 
};

//TODO
exports.createPlane = async (plane) => {
       
        return  db.query("INSERT INTO `plane` SET ?",
                [plane] 
        );
         

};

//TODO
exports.updatePlane = async (Id, plane) => {
       // const {name, surname, phone_number, email, birth_date, hire_date, salary, role_id, section_id} = employee;
        return  db.query("UPDATE `plane` SET ? WHERE Id = ?",
                [plane, Id] 
        );
         

};


exports.deletePlane = async (Id) => {
        await db.query("DELETE FROM `plane` WHERE Id = ?",[Id]);
};