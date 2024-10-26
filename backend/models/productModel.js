import mongoose from 'mongoose';

const sizeSchema = mongoose.Schema({
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
});

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageLink: { type: String, required: true },
    rating: { type: Number, required: true },
    sizes: [sizeSchema],
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
