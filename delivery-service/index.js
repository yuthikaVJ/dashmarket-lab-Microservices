const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
  res.json({
    orderId: req.params.id||"ORD-101",
    status: 'OUT_FOR_DELIVERY',
    courier: 'DashCourier #42',
    estimatedArrivalMinutes: 15
  });
});

app.listen(5003, () => console.log('DashMarket Delivery Service running on port 5003'));