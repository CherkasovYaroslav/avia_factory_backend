const db = require("../config/db");

exports.getAllClients = async () => {
        const [rows] = await db.query("SELECT *FROM `client`");
        return rows; 
};

exports.getClientById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `client` WHERE Id=?",[Id]);
        return rows[0]; 
};