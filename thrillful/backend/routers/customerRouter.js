import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js'
import Customer from '../customerModel/userModel.js'


const customerRouter = express.Router();

customerRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        const createdCustomers = await Customer.insertMany(data.customers);
        res.send({ createdCustomers });
    })
);

export default customerRouter