import { getConnection } from "../database/connect";
import { qSelectBuques } from "../database/queries/buquesQueries";

export const selectBuques = async () => {
    const db_pool = await getConnection()
    const db_response = await db_pool.request()
        .input('presente',1)    
        .execute(qSelectBuques)
    return db_response.recordset
}