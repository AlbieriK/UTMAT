import { modeloEmpleados } from "../models/Artista.models.js";

const test = () => {
    console.log("Conexion a Artista")
}
export default test

modeloEmpleados.create({
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