//import { testArtista } from "../models/Disquera.models.js";

const test = () => {
    console.log("Conexion a Disquera")
}
export default test

TestDisquera.create({
    Nombre:"William",
    Apellido:"Juanchoh O'Connell",
    Edad:"34",
    Rol:"Director"

    .then(()=>{
        console.log("Registrado exitoso")
    }
)

    .catch(()=>{
        console.log("Error al registrar")}
    )

    });
