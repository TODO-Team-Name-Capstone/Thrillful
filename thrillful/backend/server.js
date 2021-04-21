import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import customerRouter from './routers/customerRouter.js'

const app = express();

mongoose.connect('mongodb://localhost/Thrillful', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.get('/api/customers', (req, res) => {
    res.send(data.customers);
})

app.use('/api/customers', customerRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Serve at http://localhost:5000');
})