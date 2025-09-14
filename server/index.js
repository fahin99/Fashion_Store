const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: 'Premium Denim Jacket',
    price: 89.99,
    image: 'https://example.com/denim-jacket.jpg'
  },
  {
    id: 2,
    name: 'Silk Summer Dress',
    price: 129.99,
    image: 'https://example.com/summer-dress.jpg'
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/orders', (req, res) => {
  const order = req.body;
  console.log('New order:', order);
  res.json({ success: true, order });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});