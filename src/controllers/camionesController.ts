import { Request, Response } from "express"
import { auditError } from "../utils/errorHandler"
import { selectResumenDespacho, selectResumenDespachos2 } from "../services/camionesServices"

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