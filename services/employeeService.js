const db = require("../config/db");

exports.getAllEmployees = async () => {
        const [rows] = await db.query("SELECT *FROM `employee`");
        return rows; 
};

exports.getEmployeeById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `employee` WHERE Id=?",[Id]);
        return rows[0]; 
};

//TODO
exports.create = async (employee) => {
       // const {name, surname, phone_number, email, birth_date, hire_date, salary, role_id, section_id} = employee;
        return  db.query("INSERT INTO `employee` SET ?",
                [employee] 
        );
         

};

//TODO
exports.update = async (Id, employee) => {
       // const {name, surname, phone_number, email, birth_date, hire_date, salary, role_id, section_id} = employee;
        return  db.query("UPDATE `employee` SET ? WHERE Id = ?",
                [employee, Id] 
        );
         

};


exports.delete = async (Id) => {
        await db.query("DELETE FROM `employee` WHERE Id = ?",[Id]);
};