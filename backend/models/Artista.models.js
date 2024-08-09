import { Schema, model } from "mongoose";

export const esquema3 = new Schema({
    nombre:{type:String},
    puesto:{type:String},
    edad:{type:Number},
    Funcion:{type:String},
    sueldo:{type:Number}
})

export const modeloArtista = new model('Artista',esquema3)
