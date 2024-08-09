import { modeloAlbum } from "../models/Album.models.js";

const test = () => {
    console.log("Conexion a Artista")
}
export default test

modeloAlbum.create({
    NombreDeAlbum:"Dont smile at me",
    Artista:"Billie Elish *Mi ruka*",
    Año_Lanzamiento:2017,
    Rate:Buena
    .then(()=>{
        console.log("Registrado exitoso")
    })

    .catch(()=>{
        console.log("Error al registrar")
})
})