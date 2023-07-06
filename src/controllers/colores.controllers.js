import { validationResult } from "express-validator"
import Color from "../models/color"

//Controlador para obtener colores

export const obtenerColores = async (req, res)=>{
    try {
        const colores = await Color.find()
        res.status(200).json(colores)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar los colores de la base de datos"
        })
    }
}
//Controlador para obtener una solo color

export const obtenerColor = async (req, res)=>{
    try {
        const {id} = req.params
        const color = await Color.findById(id)
        res.status(200).json(color)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar el color de la base de datos"
        })
    }
}

// Controlador para crear un color

export const crearColor = async (req, res)=>{
    try {
         //trabajar con el resultado de la validacion de express-validator
         const errors = validationResult(req)
         // errors.isEmpty() // true: esta vacio, false: hay error
         if(!errors.isEmpty()){
             return res.status(400).json({errores: errors.array()})
         }
        const colorNuevo = new Color(req.body)
        await colorNuevo.save()
        res.status(201).json({
            mensaje: "El color fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear el color"
        })
    }
}

// controlador para eliminar un color

export const borrarColor = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const {id} = req.params   
        await Color.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "El color fue eliminado"
        })
    } 
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar el color"
        })
    }
}

// controlador para editar un color

export const editarColor = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const {id} = req.params   
        await Color.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "El color fue actualizado correctamente"
        })
    } 
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar el color"
        })
    }
}