import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js'
import Customer from '../models/userModel.js'
import { generateToken, isAdmin, isAuth } from '../utils.js';



const customerRouter = express.Router();


customerRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        //await Customer.remove({});
        const createdCustomers = await Customer.insertMany(data.customers);
        res.send({ createdCustomers });
    })
);

customerRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
      const customer = await Customer.findOne({ email: req.body.email });
      console.log(customer);
      if (customer) {
        if (bcrypt.compareSync(req.body.password, customer.password)) {
          res.send({
            _id: customer._id,
            email: customer.email,
            password: customer.password,
            token: generateToken(customer),
          });
          return res;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );

customerRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
      const customer = new Customer({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const createdUser = await customer.save();
      res.send({
        _id: createdUser._id,
        first_name: createdUser.first_name,
        last_name: createdUser.last_name,
        username: createdUser.username,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
      });
    })
   );

   customerRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const customer = await Customer.findById(req.user._id);
      if (customer) {
        customer.username = req.body.name || customer.username;
        customer.email = req.body.email || customer.email;
        if (req.body.password) {
          customer.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await customer.save();
        res.send({
          _id: updatedUser._id,
          first_name: updatedUser.first_name,
          last_name: updatedUser.last_name,
          username: updatedUser.username,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser),
        });
      }
    })
  );

customerRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const customers = await Customer.find({});
      res.send(customers);
    })
  );


customerRouter.get(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const customer = await Customer.findById(req.params.id);
      if (customer) {
        res.send(customer);
      } else {
        res.status(404).send({ message: 'Customer Not Found' });
      }
    })
  );

  customerRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const customer = await Customer.findById(req.params.id);
      if (customer) {
        if (customer.email === 'shawnastaff@gmail.com') {
          res.status(400).send({ message: 'Can Not Delete Admin User' });
          return;
        }
        const deleteCustomer = await customer.remove();
        res.send({ message: 'User Deleted', user: deleteCustomer });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );
  customerRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const customer = await Customer.findById(req.params.id);
      if (customer) {
        customer.first_name = req.body.first_name || customer.first_name;
        customer.last_name = req.body.last_name || customer.last_name;
        customer.username = req.body.username || customer.username;
        customer.email = req.body.email || customer.email;
        customer.password = bcrypt.hashSync(req.body.password || customer.password, 8);
        customer.isAdmin = Boolean(req.body.isAdmin);
        const updatedCustomer = await customer.save();
        res.send({ message: 'User Updated', customer: updatedCustomer });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

export default customerRouter