import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import testArtista from './backend/controllers/Artista.controller.js'
import testCancion from './backend/controllers/Cancion.controller.js'           
import testDisquera from './backend/controllers/Disquera.controller.js'
import testArtista from './backend/controller/Artista.controller.js'
import test1 from './backend/controller/Artista.controller.js'


dotenv.config()
mongoose.connect(process.env.url)
.then(()=> {
    console.log("Estoy en funcionamiento")
})

.catch(()=>{
    console.log("Error :c")
})

const app =express()
app.use(cors())

app.listen(4500,()=>{
    console.log("Estoy funcionando")
})
modelo1()
testArtista()
testArtista()
testCancion()
testDisquera()
TestAlbum()
test1()

