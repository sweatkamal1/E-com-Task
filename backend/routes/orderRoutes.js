import express from 'express';
import { placeOrder, getUserOrders } from '../controllers/orderController.js'; 
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/place-order', isAuthenticated, placeOrder);

router.get('/my-orders', isAuthenticated, getUserOrders);

export default router;
