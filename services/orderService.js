const db = require("../config/db");

exports.getAllOrders = async () => {
        const [rows] = await db.query("SELECT *FROM `order`");
        return rows; 
};

exports.getOrderById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `order` WHERE Id=?",[Id]);
        return rows[0]; 
};

//TODO
exports.createOrder = async (order) => {
       
        return  db.query("INSERT INTO `order` SET ?",
                [order] 
        );
         

};

//TODO
exports.updateOrder = async (Id, order) => {
       // const {name, surname, phone_number, email, birth_date, hire_date, salary, role_id, section_id} = employee;
        return  db.query("UPDATE `order` SET ? WHERE Id = ?",
                [order, Id] 
        );
         

};


exports.deleteOrder = async (Id) => {
        await db.query("DELETE FROM `order` WHERE Id = ?",[Id]);
};