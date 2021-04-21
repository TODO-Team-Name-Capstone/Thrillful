import express from 'express';
<<<<<<< HEAD
import mongoose from 'mongoose';
import data from './data.js';
import customerRouter from './routers/customerRouter.js'

const app = express();

mongoose.connect('mongodb://localhost/Thrillful', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

=======
import data from './data.js';

const app = express();

>>>>>>> 6000e836d4bb9aae180c4e9c8b355c21f8ad4db5
app.get('/api/customers', (req, res) => {
    res.send(data.customers);
})

<<<<<<< HEAD
app.use('/api/customers', customerRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
=======
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(5000, () => {
>>>>>>> 6000e836d4bb9aae180c4e9c8b355c21f8ad4db5
    console.log('Serve at http://localhost:5000');
})