import { Router } from "express";
import { getResumenDespachos, getResumenDespachos2, getToneladasDelSaf } from "../controllers/camionesController";
import { verifyToken } from "../middlewares/verifyToken";


const router = Router()

//Operativos
router.route('/api/camiones/resumen1').get(getResumenDespachos)
router.route('/api/camiones/resumen2').get(getResumenDespachos2)

//ENDPOINT PARA BUSCAR LAS TNS EN EL SAF
router.route('/api/saf/buscar-tns').get(verifyToken,getToneladasDelSaf)
export default router