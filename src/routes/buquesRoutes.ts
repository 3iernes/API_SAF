import { Router } from "express";
import { getBuques } from "../controllers/buqueController";

const router = Router()

//Buques
router.route('/api/buques').get(getBuques)

export default router