import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    price: {
        type: String,
        required: true,
        trim: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        minlength: 5
    },
    storeId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
})

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;