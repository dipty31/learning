

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String},
    title: {type: String, required: true},
    color: {type: String},
    price: {type: Number, required: true},
    availableQty: {type: Number, required: true},

}, {timestamps: true});
// timestamps is an object, it'll automatically make 'created at' and 'updated at'

export default mongoose.model('Product', ProductSchema);