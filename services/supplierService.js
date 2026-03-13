const db = require("../config/db");

exports.getAllSuppliers = async () => {
        const [rows] = await db.query("SELECT *FROM `supplier`");
        return rows; 
};

exports.getSupplierById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `supplier` WHERE Id=?",[Id]);
        return rows[0]; 
};

exports.create = async (supplier) => {
        const {name,phone_number,email,details,address} = supplier
        const [result] = await db.query("INSERT INTO `supplier`(name,phone_number,email,details,address) VALUES(?,?,?,?,?)",
                [name,phone_number,email,details,address] 
        );
        
        return {Id: result.insertId,
                ...supplier
        }; 
};

exports.update = async (Id, supplier) => {
        const {name,phone_number,email,details,address} = supplier
        const [result] = await db.query("UPDATE `supplier` SET name = ?, phone_number = ?, email = ?, details = ?, address = ? WHERE Id = ?",
                [name,phone_number,email,details,address,Id] 
        );
        
        return {Id , ...supplier}; 
};

exports.delete = async (Id) => {
        await db.query("DELETE FROM `supplier` WHERE Id = ?",[Id]);
};

exports.getSupplierSectionsAndDetails = async (supplierId) => {

    const [rows] = await db.query(`
        SELECT 
            section.id AS section_id,
            section.name AS section_name,
            supplier.details
        FROM section_supplier
        JOIN section ON section.id = section_supplier.section_id
        JOIN supplier ON supplier.id = section_supplier.supplier_id
        WHERE supplier.id = ?
    `, [supplierId]);

    return rows;
};
