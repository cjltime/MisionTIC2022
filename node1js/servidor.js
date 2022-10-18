

const express = require("express");
const mongoose=require("mongoose");
const TareaSchema=require("./modelos/Tarea.js");

const app = express();
const router=express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//conexion base de datos

mongoose.connect("mongodb+srv://cjltime:j7v3DGw0PhvIJM5R@clustercjltime.narasaq.mongodb.net/Actididades1DB?retryWrites=true&w=majority");

// operaciones CRUD

router.get("/", (req,res)=>{
    res.send("El Inicio de mi API");
})
//funcionalidad verbo get

router.get("/tarea",(req,res) => {
    TareaSchema.find(function(err,datos){
        if(err){
            console.log("error leyendo las tareas");
        }else{
            res.send(datos);
        }
    })
});

//funcionalidad vervo post
router.post("/tarea",(req,res)=>{
    let nuevaTarea=new TareaSchema({
        idTarea:req.body.id,
        nombreTarea:req.body.nombre,
        detalleTarea:req.body.detalle
    });
    nuevaTarea.save(function(err, datos){
        if (err){
            console.log(err);
        }
        res.send("Tarea Almacenada con Exito")
    })
});

app.use(router);
app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000")
});