//import db

const db=require('./db')

//get all product details from db
const getProducts=()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Product not found'
                }
            }
        }
    )
}

const addtowishlist=(id,title,price,image,description)=>{

    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'Product already exist in wishlist'
                    
                }
            }else{
                const newWishlist=new db.Wishlist({
                    id,
                    title,
                    price,
                    image,
                    description
                })
                newWishlist.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'Product added successfully'
                }
            }
        }
    )
}

const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Your Wishlist is empty'
                }
            }
        }
    )
}

const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:'product removed successfully',
                    
                }
            }else{
                return{
                    status:false,
                    statusCode:402,
                    message:'product not available'
                }
            }
        }
    )
}

module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish

}