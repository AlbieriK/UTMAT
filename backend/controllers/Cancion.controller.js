import { modeloCancion } from "../models/Cancion.models.js";

const test = () => {
    console.log("Conexion a Canción")
}
export default test

modeloCancion.create({
    Nombre:"Billie Elish",
    Apellido:"Baird O'Connell",
    Edad:22,
    Rol:Cantante
    .then(()=>{
        console.log("Registrado exitoso")
    })
    .catch(()=>{
        console.log("Error al registrar")
})
})