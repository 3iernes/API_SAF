import { getConnection } from "../database/connect";
import { qSelectResumenDespachos, qSelectResumenDespachos2 } from "../database/queries/camionesQueries";

export const selectResumenDespacho = async()=>{
    const db_pool = await getConnection()
    const db_response = await db_pool.request()
        .input('unineg',1)
        .input('user',1)
        .execute(qSelectResumenDespachos)
    return db_response.recordset
}

export const selectResumenDespachos2 = async()=>{
    const db_pool = await getConnection()
    const db_response = await db_pool.request()
        .input('unineg',1)
        .input('user',1)
        .execute(qSelectResumenDespachos2)
    return db_response.recordsets
}