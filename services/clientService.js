const db = require("../config/db");

exports.getAllClients = async () => {
        const [rows] = await db.query("SELECT *FROM `client`");
        return rows; 
};

exports.getClientById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `client` WHERE Id=?",[Id]);
        return rows[0]; 
};

exports.create = async (client) => {
        const {name, phone_number, email, address} = client;
        const [result] = await db.query("INSERT INTO `client`(name, phone_number, email, address) VALUES(?,?,?,?)",
                [name, phone_number, email, address] 
        );
        
        return {Id: result.insertId,
                ...client
        }; 

};

exports.update = async (Id, client) => {
        const {name,phone_number,email,address} = client
        const [result] = await db.query("UPDATE `client` SET name = ?, phone_number = ?, email = ?,  address = ? WHERE Id = ?",
                [name, phone_number, email, address, Id] 
        );
        
        return {Id , ...client}; 
};

exports.delete = async (Id) => {
        await db.query("DELETE FROM `client` WHERE Id = ?",[Id]);
};