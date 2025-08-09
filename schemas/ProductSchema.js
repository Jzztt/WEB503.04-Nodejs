import Joi from "joi";

const ProductSchema = Joi.object({
    name:Joi.string().min(3).max(50).required({
        message: " please enter your name"
    }),
    price: Joi.number().min(0).required({
        message: " please enter your price"
    }),
    description:Joi.string().optional().allow(''),
})

export default ProductSchema;