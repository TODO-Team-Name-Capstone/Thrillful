import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/customers', (req, res) => {
    res.send(data.customers);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(5000, () => {
    console.log('Serve at http://localhost:5000');
})