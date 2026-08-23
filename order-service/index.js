const express = require('express');
const app = express();

app.use(express.json());

app.post('/', async(req, res) => {
    const orderDetails = req.body;
    console.log('Received order:', orderDetails);

    try {
        await fetch('http://notification-service:5004/notify',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'New order placed',
                orderDetails: orderDetails
            })
        });  
    }catch (error) {
        console.error('Failed to notify notification service:', error.message);
    
    }
    res.status(201).json ({
        message: 'Order placed successfully',
        orderDetails: orderDetails
    });
});

app.listen(5002, () => console.log('DashMarket Order Service running on port 5002')); 