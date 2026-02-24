const db = require("../config/db");

exports.getAllProducts = async () => {
        const [rows] = await db.query("SELECT *FROM `product`");
        return rows; 
};

exports.getProductById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `product` WHERE Id=?",[Id]);
        return rows[0]; 
};

//TODO
exports.createProduct = async (product) => {
       
        return  db.query("INSERT INTO `product` SET ?",
                [product] 
        );
         

};

//TODO
exports.updateProduct = async (Id, product) => {
       // const {name, surname, phone_number, email, birth_date, hire_date, salary, role_id, section_id} = employee;
        return  db.query("UPDATE `product` SET ? WHERE Id = ?",
                [product, Id] 
        );
         

};


exports.deleteProduct = async (Id) => {
        await db.query("DELETE FROM `product` WHERE Id = ?",[Id]);
};