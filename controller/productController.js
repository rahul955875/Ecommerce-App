import productModel from "../models/productModel";

export const createProductController = async(req,res)=>{
    try {
        const {name} = req.body;
        const existingProduct = await productModel.findOne({name})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : 'Error while creating product',
            error
        })
    }
}