"use server";
import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}

export const query = async ({ query, values = [] }) => {
    const connection = await mysql.createConnection(config);
    const [rows] = await connection.execute(query, values);
    return rows;
}