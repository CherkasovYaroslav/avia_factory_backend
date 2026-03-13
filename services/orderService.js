const db = require("../config/db");

exports.getAllOrders = async () => {
    const [rows] = await db.query(`
        SELECT
            o.id,
            o.total_price,
            o.date,
            o.status,
            o.client_id,
            c.name AS client_name
        FROM \`order\` o
        LEFT JOIN client c ON o.client_id = c.id
        ORDER BY o.id
    `);

    return rows;
};

exports.getOrderById = async (id) => {
    const [rows] = await db.query(`
        SELECT
            o.id,
            o.total_price,
            o.date,
            o.status,
            o.client_id,
            c.name AS client_name
        FROM \`order\` o
        LEFT JOIN client c ON o.client_id = c.id
        WHERE o.id = ?
    `, [id]);

    return rows[0];
};

exports.createOrder = async (order) => {
    const [result] = await db.query(
        "INSERT INTO \`order\` SET ?",
        [order]
    );

    return { id: result.insertId, ...order };
};

exports.updateOrder = async (id, order) => {
    await db.query(
        "UPDATE \`order\` SET ? WHERE id = ?",
        [order, id]
    );

    return { id, ...order };
};

exports.deleteOrder = async (id) => {
    await db.query(
        "DELETE FROM \`order\` WHERE id = ?",
        [id]
    );
};
