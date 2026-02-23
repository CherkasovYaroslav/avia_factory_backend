const db = require("../config/db");

exports.getAllRoles = async () => {
        const [rows] = await db.query("SELECT *FROM `role`");
        return rows; 
};

exports.getRoleById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `role` WHERE Id=?", [Id]);
        return rows[0]; 
};

exports.create = async (data) => {
        
        const [result] = await db.query("INSERT INTO `role` SET ?",
                [data] 
        );
        
        return {Id: result.insertId,
                ...data
        }; 

};

exports.delete = async (Id) => {
        await db.query("DELETE FROM `role` WHERE Id = ?",[Id]);
};