//console.log("Hola Mundo desde NodeJS")

const express=require("express");
const mongoose = require("mongoose"); 
const TareaSchema=require("./modelos/Tarea.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json);

// conexion a base de datos
//instalar mongo  con npm i mongoose --save
mongoose.connect("mongodb+srv://cjltime:j7v3DGw0PhvIJM5R@clustercjltime.narasaq.mongodb.net/ActividadesBD?retryWrites=true&w=majority");

// Operaciones CRUD


router.get("/", (req, res) => {
    res.send("El inicio de mi API");
})

router.post("/tarea",(req,res)=>{
    let nuevaTarea=new TareaSchema({
        idTarea:req.body.id,
        nombreTarea:req.body.nombre,
        detalleTarea:req.body.detalle
    });
    nuevaTarea.save(function(err,datos){
        if(err){
            console.log(err);
        }
        res.send("tarea almacenada correctamente.")
    })
}); 


app.use(router);
app.listen(3000, ()=>{
    console.log("servidor corriendo en el puerto 3000")
});