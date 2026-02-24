const db = require("../config/db");

exports.getAllSections = async () => {
        const [rows] = await db.query("SELECT *FROM `section`");
        return rows; 
};

exports.getSectionById = async (Id) => {
        const [rows] = await db.query("SELECT *FROM `section` WHERE Id=?",[Id]);
        return rows[0]; 
};


exports.createSection = async (section) => {
       // const {name, surname, phone_number, email, birth_date, hire_date, salary, role_id, section_id} = employee;
        return  db.query("INSERT INTO `section` SET ?",
                [section] 
        );
         

};


exports.updateSection = async (Id, section) => {
       // const {name, surname, phone_number, email, birth_date, hire_date, salary, role_id, section_id} = employee;
        return  db.query("UPDATE `section` SET ? WHERE Id = ?",
                [section, Id] 
        );
         

};


exports.deleteSection = async (Id) => {
        await db.query("DELETE FROM `section` WHERE Id = ?",[Id]);
};