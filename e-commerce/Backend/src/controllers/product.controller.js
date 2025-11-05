import productModel from "../models/product.model.js"

const createController = async (req, res)=>{
    try {
       const {title , price , category, image , description } = req.body

       if(!title || !price || !category || !image || !description){
            res.status(400).json({message : "all field are required"})
       }

       const product =  await productModel.create({
            title ,
            price,
            category,
            image,
            description
        })

        res.status(201).json({message : "product created successfully" , product})


    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internl server error", error : error.message})           
    }
}


const readController = async (req, res) => {
    try {
       const products = await productModel.find()

       if(products.length === 0){
            res.status(404).json({message : "product data not found"})
       }


       res.status(200).json({message : "product data found" , products})

    } catch (error) {
         console.log(error.message);
        res.status(500).json({message : "internl server error", error : error.message})           
 
    }
}

export {
    createController,
    readController
}