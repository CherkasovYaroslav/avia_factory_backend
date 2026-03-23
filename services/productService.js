const db = require("../config/db");

exports.getAllProducts = async () => {
    const [rows] = await db.query(`
        SELECT
            p.id,
            p.unique_code,
            p.production_date,
            p.status,
            p.plane_id,
            p.order_id,

            pl.model AS plane_name,
            pl.type AS plane_type,
            pl.price AS plane_price,
            
            o.total_price AS order_total_price

        FROM product p
        LEFT JOIN plane pl ON p.plane_id = pl.id
        LEFT JOIN \`order\` o ON p.order_id = o.id
        ORDER BY p.id
    `);

    return rows;
};

exports.getProductById = async (id) => {
    const [rows] = await db.query(`
        SELECT
            p.id,
            p.unique_code,
            p.production_date,
            p.status,
            p.plane_id,
            p.order_id,

            pl.model AS plane_name,
            pl.type AS plane_type,
            pl.price AS plane_price,
            o.total_price AS order_total_price

        FROM product p
        LEFT JOIN plane pl ON p.plane_id = pl.id
        LEFT JOIN \`order\` o ON p.order_id = o.id
        WHERE p.id = ?
    `, [id]);

    return rows[0];
};

exports.createProduct = async (product) => {
    const [result] = await db.query(
        "INSERT INTO product SET ?",
        [product]
    );

    return { id: result.insertId, ...product };
};

exports.updateProduct = async (id, product) => {
    await db.query(
        "UPDATE product SET ? WHERE id = ?",
        [product, id]
    );

    return { id, ...product };
};

exports.deleteProduct = async (id) => {
    await db.query(
        "DELETE FROM product WHERE id = ?",
        [id]
    );
};
