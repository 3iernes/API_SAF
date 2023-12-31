import {
    ConnectionPool,
    config,
    connect} from 'mssql'

const config: config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER!,
    database: process.env.SQL_DATABASE,
    options:{
        encrypt: false,
        trustServerCertificate: true,
        requestTimeout:30000
    },

}

export async function getConnection():Promise<ConnectionPool>{
    const pool = await connect(config);
    return pool;
}
