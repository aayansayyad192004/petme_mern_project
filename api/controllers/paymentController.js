const Razorpay = require('razorpay');
const dotenv = require('dotenv');

dotenv.config();

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

const createOrder = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const options = {
      amount: amount * 100, // Amount in smallest currency unit
      currency,
      receipt: 'receipt_order_74394',
    };

    razorpayInstance.orders.create(options, (err, order) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Order creation failed', error: err });
      }
      res.status(200).json({ success: true, order });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error', error });
  }
};

module.exports = {
  createOrder,
};
