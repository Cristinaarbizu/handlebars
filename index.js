const express = require("express");
const exphbs = require("express-handlebars");

// Creamos servidor aplicaciones
const app = express();

//Politica de caché
//app.enable("view cache");

// configuración haandlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Configuración ruteo
app.get("/", (req,res)=>{
    res.render("home",{
        titulo: "Bienvenidos a mi porfolio",
        subtitulo:"Equipo DevelopersNebri",
        arrLang: ["JavaScript", "Java", "C#", "Python", "PHP"],
        contenido: "Somos un equipo especializado en desarrollo web"
    });
});
app.get("/clientes", (req,res)=>{
    res.render("clientes");
})

//Nuevo sitio
const mysite=require("./routes/misitio");
app.use("/misitio",mysite)

//Indicar estaticos del nuevo sitio
app.use(express.static("public"));



app.listen(3000);