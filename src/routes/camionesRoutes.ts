import { Router } from "express";
import { getResumenDespachos, getResumenDespachos2 } from "../controllers/camionesController";


const router = Router()

//Buques
router.route('/api/camiones/resumen').get(getResumenDespachos)
router.route('/api/camiones/resumen2').get(getResumenDespachos2)

export default router