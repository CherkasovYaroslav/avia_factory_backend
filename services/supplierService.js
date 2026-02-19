const db = require("../config/db");

exports.getAllSuppliers = async () => {
        const [rows] = await db.query("SELECT *FROM `supplier`");
        return rows; 
};

exports.getSupplierById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `supplier` WHERE Id=?",[Id]);
        return rows[0]; 
};

