//creacion de objetos anidados en javascript//



var miReceta =
{
    "descripcion":"postre favorito",
    "costo":16.6,
    "ingredientes":{
        "masa":
        {
            "harina": "100 gramos",
            "sal":"media cucharada",
            "agua":"1 tasa"
        },
        "glaseado":
        {
            "azucar":"120 gramos",
            "chocolate":"5 cucharadas",
            "mantequilla":"200 gramos"
        }
    }
};

console.log(miReceta.descripcion);