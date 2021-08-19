const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public')); //es un ruta estatica donde esta nuestras imagenes, nuestras rutas tomaran informacion de esta ruta estatica.

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html')); //forma recomendad para hacer un ruta**no olvidarse del tipo de Archivo(.html)**
    //res.sendFile(path.join(__dirname, 'viewes/index.html'))**otra forma de hacer un ruta.**
})
app.get('/index.html',(req,res)=>{res.sendFile(path.join(__dirname,'views','index.html'))});
app.get('/babbage.html',(req,res)=>{res.sendFile(path.join(__dirname,'views','babbage.html'))});
app.get('/berners-lee.html',(req,res)=>{res.sendFile(path.join(__dirname, 'views', 'berners-lee.html'))});
app.get('/clarke.html',(req,res)=>{res.sendFile(path.join(__dirname,'views','clarke.html'))});
app.get('/hamilton.html',(req,res)=>{res.sendFile(path.join(__dirname,'views','hamilton.html'))});
app.get('/hopper.html',(req,res)=>{res.sendFile(path.join(__dirname,'views','hopper.html'))});
app.get('/lovelace.html',(req,res)=>{res.sendFile(path.join(__dirname, 'views', 'lovelace.html'))});
app.get('/turing.html',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'turing.html')));
app.listen(3030,()=> console.log('servidor corriendo ' + port));