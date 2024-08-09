import { Schema, model } from "mongoose";

export const esquema4 = new Schema({
    nombreDeAlbum:{type:String},
    Artsita:{type:String},
    Año_Lanzamiento:{type:Number},
    Rate:{type:String}
})

export const modeloAlbum = new model('Album',esquema4)