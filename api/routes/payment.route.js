import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// Route for creating a new order
router.post('/create-order', async (req, res, next) => {
  try {
    const { amount, currency } = req.body;

    // Create order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in the smallest currency unit
      currency,
      receipt: 'receipt_order_74394',
      payment_capture: 1,
    });

    // Send success response with order details
    res.json({ success: true, order });
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
});

export default router;
