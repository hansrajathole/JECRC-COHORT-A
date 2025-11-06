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


const updateController = async (req, res)=>{
    try {
        
       const productId = req.params.productId
       const {price , description , category , image , title} = req.body
        

      const product = await productModel.findById(productId)
      
      if(!product){
        return res.status(404).json({message : "product not found"})
      }

      product.title = title || product.title
      product.price = price || product.price
      product.category = category || product.category
      product.description = description || product.description
      product.image = image || product.image
 
      await product.save()

      res.status(200).json({message : "product updated successul...", product })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internl server error", error : error.message})           

    }
}

const detailController = async (req , res) => {
    try {

        const productId = req.params.productId

        if(!productId){
            return res.status(400).json({message : "productId is required"})
        }
        
        const product = await productModel.findById(productId)

        if(!product){
            return res.status(404).json({message : "product not found"})
        }

        res.status(200).json({message : "product detail found" , product})


    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internl server error", error : error.message})           
    }
}


const deleteController = async (req , res) => {
    try {
        
        const productId = req.params.productId

        if(!productId){
            return res.status(400).json({message : "productId is required"})
        }

        await productModel.findByIdAndDelete(productId)

        res.status(200).json({message : "product deleted successful"})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internl server error", error : error.message})           
   
    }
}

export {
    createController,
    readController,
    updateController,
    detailController,
    deleteController
}