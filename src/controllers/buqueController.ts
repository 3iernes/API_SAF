import { Request, Response } from "express"
import { auditError } from "../utils/errorHandler"
import { selectBuques } from "../services/buquesServices"

export const getBuques = async (req: Request, res:Response) =>{
    try {
        const buques = await selectBuques()
        return res.status(200).json(buques)
    } catch (error) {
        auditError(`Controller - getBuques: ${error}`, `${req.method} ${req.originalUrl}`)
        return res.status(500).json({ msj: 'Algo salio mal' })
    }
}