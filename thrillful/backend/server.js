import express from 'express';
import mongoose from 'mongoose';
import customerRouter from './routers/customerRouter.js';

const PORT = process.env.PORT || 5000
const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//const uri = 'mongodb+srv://MissS:ASHivy11@cluster0.jcl0m.mongodb.net/Thrillful?retryWrites=true&w=majority';

mongoose.connect('mongodb+srv://MissS:ASHivy11@cluster0.jcl0m.mongodb.net/Thrillful?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


app.use('/api/customers', customerRouter);


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

app.listen(PORT, () => {
    console.log('Serve at http://localhost:5000')
});