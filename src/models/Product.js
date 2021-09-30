import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    weight: { type: String, require: false },
    dimensions: { type: String, require: false },
    amount: {
        type: Number,
        required: true,
    },
    image: { type: String, require: false },
    otherImages: { type: String, require: false },
    sellerId: { type: String, require: true },
    description: { type: String, require: true },
}, {
    timestamps: true,
})


const Product = mongoose.model('Product', productSchema);
export default Product;