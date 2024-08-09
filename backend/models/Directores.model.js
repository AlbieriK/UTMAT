import { Schema, model } from "mongoose";

export const esquema1 = new Schema({
    nombre:{type:String},
    Apelllido:{type:String},
    Edad:{type:Number},
    Rol:{type:String}
})

export const modeloAlbum = new model('Album',esquema1)