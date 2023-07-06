import { Router } from "express";
import {
    borrarColor,
    crearColor,
    editarColor,
    obtenerColor,
    obtenerColores
} from "../controllers/colores.controllers";
import {check} from "express-validator"

const router = Router()


router.route("/colores")
    .get(obtenerColores)
    .post([check("nombreColor")
           .notEmpty()
           .withMessage("El color es un dato obligatorio")]
                ,crearColor)
router.route("/colores/:id")
    .get(obtenerColor)
    .delete(borrarColor)
    .put(editarColor)

export default router