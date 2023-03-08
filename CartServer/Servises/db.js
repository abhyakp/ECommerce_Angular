//import mongoose

const mongoose = require('mongoose')

//Define the connection string

mongoose.connect('mongodb://localhost:27017/Cart')
    .then(() => console.log('Connected to mongodb'))
    .catch((err) => console.error('Error connecting to mongodb', err));

// mongoose.connect('mongodb://localhost:27017/cart',()=>{
//     console.log('connected to mongoDB');
// })

//create a model for the products

const Product=mongoose.model('Product',{
    
    //schema creation

    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }

})

//create a new collection in mongoDB
    

const Wishlist=mongoose.model('wishlist',{

    id:Number,
    title:String,
    price:Number,
    image:String,
    description:String

})

module.exports={
    Product,
    Wishlist
}