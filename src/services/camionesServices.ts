import { getConnection } from "../database/connect";
import { qSelectDifEquiOps, qSelectResumenDespachos, qSelectResumenDespachos2, qSelectTonsDelSaf } from "../database/queries/camionesQueries";

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

export const updateTnsEnLog = async(ctrl_op_saf:number)=>{
    const db_pool = await getConnection()
    const db_response = await db_pool.request()
        .input('ctrl_op_saf',ctrl_op_saf)
        .execute(qSelectTonsDelSaf)
    return db_response.recordset[0]
}

export const selectDifEqOp = async (ctrl_operativo:number)=>{
    const db_pool = await getConnection()
    const db_response = await db_pool.request()
        .input('ctrl_operativo',ctrl_operativo)
        .execute(qSelectDifEquiOps)
    return db_response.recordsets
}