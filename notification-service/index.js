const express = require('express');
const app = express();

app.use(express.json());

app.post('/notify', (req, res) => {
  const payload = req.body;
  console.log(`[${new Date().toISOString()}] Notification received:`, payload);

  res.status(200).json({ message: ' Order notification logged successfully' });
});

app.listen(5004, () => {
  console.log('notification-service running on port 5004');
});