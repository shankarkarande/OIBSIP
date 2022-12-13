const mongoose=require('mongoose')

const pizzaSchema=mongoose.Schema({
    name:{type:String,require},
    variants:[],
    prices:[],
    image:{type:String,require},
    description:{type:String,require}
},
    {timestamps:true}
)

const pizzaModel=mongoose.model('pizzas',pizzaSchema)
module.exports=pizzaModel
