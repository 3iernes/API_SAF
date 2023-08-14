import { Request, Response } from "express"
import { auditError } from "../utils/errorHandler"
import { selectResumenDespacho, selectResumenDespachos2, updateTnsEnLog } from "../services/camionesServices"

export const getResumenDespachos = async (req: Request, res:Response) =>{
    try {
        const resumen = await selectResumenDespacho()
        return res.status(200).json(resumen)
    } catch (error) {
        auditError(`Controller - getResumenDespachos: ${error}`, `${req.method} ${req.originalUrl}`)
        return res.status(500).json({ msj: 'Algo salio mal' })
    }
}

export const getResumenDespachos2 = async (req: Request, res:Response) =>{
    try {
        const resumen2 = await selectResumenDespachos2()
        return res.status(200).json(resumen2)
    } catch (error) {
        auditError(`Controller - getResumenDespachos2: ${error}`, `${req.method} ${req.originalUrl}`)
        return res.status(500).json({ msj: 'Algo salio mal' })
    }
}

export const getToneladasDelSaf = async(req: Request, res:Response) => {
    try {
        const {ctrl_op_saf} = req.query
        if(!ctrl_op_saf) return res.status(400).json({msj:'Falta el numero de operativo.'})
        //console.log(ctrl_op_saf)
        const db_result = await updateTnsEnLog(+ctrl_op_saf)
        console.log(db_result)
        if(db_result.resultado){
            return res.status(200).json({msj:'Ejecutado con exito, revise las toneladas y cantidad de viajes por las dudas.'})
        }else{
            return res.status(400).json({msj:`Hay equipos que no se corresponden con la info del SAF o el Operativo no esta cerrado en el SAF. 
            Revise los datos.`})
        }
    } catch (error) {
        return res.status(500).json({msj:'Algo salio mal.'})
    }
}