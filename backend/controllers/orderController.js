import Order from '../models/Order.js';

export const placeOrder = async (req, res) => {
    const { products, totalAmount } = req.body;

    const newOrder = new Order({
        userId: req.user._id,
        products,
        totalAmount,
        paymentMethod: 'Cash on Delivery',
    });

    try {
        const savedOrder = await newOrder.save();

     
        res.status(201).json({ message: 'Order placed successfully!', order: savedOrder });
    } catch (error) {
        res.status(500).json({ message: 'Failed to place order.', error: error.message });
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user._id }).populate('products.productId');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders.', error: error.message });
    }
};
