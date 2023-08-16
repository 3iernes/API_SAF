import { Router } from "express";
import { getOpEqDif, getResumenDespachos, getResumenDespachos2, getToneladasDelSaf } from "../controllers/camionesController";
import { verifyToken } from "../middlewares/verifyToken";


const router = Router()

//Operativos
router.route('/api/camiones/resumen1').get(getResumenDespachos)
router.route('/api/camiones/resumen2').get(getResumenDespachos2)

//ENDPOINT PARA BUSCAR LAS TNS EN EL SAF
router.route('/api/saf/buscar-tns').get(verifyToken,getToneladasDelSaf)
//ENDPOINT PARA LISTAR LA DIFERENCIA DE CAMIONES ENTRE OPERATIVOS
router.route('/api/saf/buscar-op-dif').get(verifyToken,getOpEqDif)
export default router