const db = require("../config/db");

exports.getAllPlanes = async () => {
    const [rows] = await db.query(`
        SELECT 
            p.id,
            p.model,
            p.type,
            p.price,
            p.section_id,
            s.name AS section_name
        FROM plane p
        LEFT JOIN section s ON p.section_id = s.id
        ORDER BY p.id
    `);

    return rows;
};

exports.getPlaneById = async (id) => {
    const [rows] = await db.query(`
        SELECT 
            p.id,
            p.model,
            p.type,
            p.price,
            p.section_id,
            s.name AS section_name
        FROM plane p
        LEFT JOIN section s ON p.section_id = s.id
        WHERE p.id = ?
    `, [id]);

    return rows[0];
};

exports.createPlane = async (plane) => {
    const [result] = await db.query(
        "INSERT INTO plane SET ?",
        [plane]
    );

    return { id: result.insertId, ...plane };
};

exports.updatePlane = async (id, plane) => {
    await db.query(
        "UPDATE plane SET ? WHERE id = ?",
        [plane, id]
    );

    return { id, ...plane };
};

exports.deletePlane = async (id) => {
    await db.query(
        "DELETE FROM plane WHERE id = ?",
        [id]
    );
};
