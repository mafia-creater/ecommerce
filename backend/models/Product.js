const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category:{
        type: String,
        required: true,
        enum: ["tees", "hoodies", "jackets", "longsleeves", "bottoms", "accessories"],
    },
    sizes:{
        type: [String],
        required: true,
    },
    drop: {
        type: String,
        required: true,
    },
    images:{
        type: [String],
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    isBestSeller: {
      type: Boolean,
      required: true,
      default: false,
    },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;