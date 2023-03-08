//import express

const express = require('express');

//import cors

const cors = require('cors')

//import dataservices.js

const dataservices =require('./Servises/dataServices')

//creating an app using express

const app = express();

//use json parser for server responses

app.use(express.json())

//using cors describe the origin to the server

app.use(cors({
    origin: 'http://localhost:4200'
}))

//setup a port number

app.listen(3000,()=>{
    console.log("Listening on the port 3000");
})

//api calls to get products

app.get('/all-products',(req, res)=>{
    dataservices.getProducts().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to add wishlist

app.post('/addtowishlist',(req, res)=>{
    
    dataservices.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
         result=>{
             res.status(result.statusCode).json(result)
         }
     )
})

//api call to show wishlist

app.get('/getwishlist',(req, res)=>{
    dataservices.getwishlist().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})


app.delete('/deletewish/:id',(req, res)=>{
    dataservices.deletewish(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})


