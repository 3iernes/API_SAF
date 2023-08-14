import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express"

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken  = req.headers.authorization?.split(' ')[1];
    //console.log(accessToken)
    try {
        if (!accessToken) {
            console.log('1')
            return res.status(401).json({ msj: "No hay token" });
        }
        jwt.verify(accessToken, process.env.SECRET_KEY as string)
        return next()
    } catch (error) {
        console.log(`Error al verificarToken: ${error}`)
        return res.status(401).json({
            msj: "No autorizado",
        });
    }
}