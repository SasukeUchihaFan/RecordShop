const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        id: {type: String, required:true, unique:true},
        Title: {type: String, required:true, unique:true}, 
        desc:{type:String, required:true}, 
        img: { type: String, required: true },
        artist: {type:String, required:true},
        genre: {type: Array},
        price: {type: Number, required:true},
        quantity: {type: Number, required:true}, 
        inStock: { type: Boolean, default: true}

        
    },
    { timestamps: true}
);


module.exports = mongoose.model("Product", ProductSchema);