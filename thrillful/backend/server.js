import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/customers', (req, res) => {
    res.send(data.customers);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});

//const port = process.env.PORT || 5000

app.listen(5000, () => {
    console.log('Serve at http://localhost:5000');

    //Template literal need back tic char instead of single quotes. 
    //console.log('Serve at http://localhost:${port}');
})