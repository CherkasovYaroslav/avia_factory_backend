const db = require("../config/db");

exports.getAllEmployees = async () => {
    const [rows] = await db.query(`
        SELECT 
            e.id,
            e.name,
            e.surname,
            e.phone_number,
            e.email,
            e.birth_date,
            e.hire_date,
            e.salary,
            e.role_id,
            e.section_id,
            r.name AS role_name,
            s.name AS section_name
        FROM employee e
        LEFT JOIN role r ON e.role_id = r.id
        LEFT JOIN section s ON e.section_id = s.id
        ORDER BY e.id
    `);

    return rows;
};

exports.getEmployeeById = async (id) => {
    const [rows] = await db.query(`
        SELECT 
            e.id,
            e.name,
            e.surname,
            e.phone_number,
            e.email,
            e.birth_date,
            e.hire_date,
            e.salary,
            e.role_id,
            e.section_id,
            r.name AS role_name,
            s.name AS section_name
        FROM employee e
        LEFT JOIN role r ON e.role_id = r.id
        LEFT JOIN section s ON e.section_id = s.id
        WHERE e.id = ?
    `, [id]);

    return rows[0];
};

exports.create = async (employee) => {
    const [result] = await db.query(
        "INSERT INTO employee SET ?",
        [employee]
    );

    return { id: result.insertId, ...employee };
};

exports.update = async (id, employee) => {
    await db.query(
        "UPDATE employee SET ? WHERE id = ?",
        [employee, id]
    );

    return { id, ...employee };
};

exports.delete = async (id) => {
    await db.query(
        "DELETE FROM employee WHERE id = ?",
        [id]
    );
};
