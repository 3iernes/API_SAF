import { Request, Response } from "express"
import { auditError } from "../utils/errorHandler"
import { selectDifEqOp, selectResumenDespacho, selectResumenDespachos2, updateTnsEnLog } from "../services/camionesServices"

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
        console.log(ctrl_op_saf)
        if(!ctrl_op_saf) return res.status(400).json({msj:'Falta el numero de operativo.'})
        //console.log(ctrl_op_saf)
        const db_result = await updateTnsEnLog(+ctrl_op_saf)
        console.log(db_result)
        if(db_result.resultado){
            return res.status(200).json({msj:'Ejecutado con exito, revise las toneladas y cantidad de viajes por las dudas.'})
        }else{
            return res.status(400).json({msj:`Hay ${db_result.dif_cam_sl} equipos del SAF que no se corresponden con equipos de Logistica.
Hay ${db_result.dif_cam_ls} equipos de Logistica que no se corresponden con equipos del SAF.
Recuerde que la accion solo se aplica con operativos finalizados en el saf.
Revise los datos.`})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({msj:'Algo salio mal.'})
    }
}

export const getOpEqDif = async(req: Request, res:Response) => {
    try {
        const {ctrl_operativo} = req.query
        if(!ctrl_operativo) return res.status(400).json({msj:'Falta el numero de operativo.'})
        const diferencia = await selectDifEqOp(+ctrl_operativo)
        return res.status(200).json(diferencia)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msj:'Algo salio mal.'})
    }
}