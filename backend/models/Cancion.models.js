import { Schema, model } from "mongoose";

export const esquema2 = new Schema({
    nombre:{type:String},
    Genero:{type:String},
    Año_lanzamiento:{type:Number}
})

export const testCancion = new model('Cancion',esquema2)