import express from 'express';
import expressAsyncHandler from 'express-async-handler';
//import bcrypt from 'bcryptjs';
import data from '../data.js'
import Customer from '../customerModel/userModel.js'


const customerRouter = express.Router();

customerRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        //await Customer.remove({});
        const createdCustomers = await Customer.insertMany(data.customers);
        res.send({ createdCustomers });
    })
);

/**WIP trying to figure out! */
/************************************************************************************* */
// customerRouter.post(
//     '/signin',
//     expressAsyncHandler(async (req, res) => {
//       const customer = await Customer.findOne({email : req.body.email});
//       if (customer) {
//         if (bcrypt.compareSync(req.body.password, customer.password)) {
//           res.send({
//             _id: customer._id,
//             email: customer.email,
//             password: customer.password,
//             //token: generateToken(user),
//           });
//           return;
//         }
//       }
//       res.status(401).send({ message: 'Invalid email or password' });
//     })
//   );

// customerRouter.post(
//     '/register',
//     expressAsyncHandler(async (req, res) => {
//       const customer = new Customer({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         username: req.body.username,
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, 8),
//       });
//       const createdUser = await customer.save();
//       res.send({
//         _id: createdUser._id,
//         first_name: createdUser.first_name,
//         last_name: createdUser.last_name,
//         username: createdUser.username,
//         email: createdUser.email,
//         isAdmin: createdUser.isAdmin,
//         //token: generateToken(createdUser),
//       });
//     })
//   );
/*************************************************************************************** */
customerRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const customers = await Customer.find({});
      res.send(customers);
    })
  );


customerRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const customer = await Customer.findById(req.params.id);
      if (customer) {
        res.send(customer);
      } else {
        res.status(404).send({ message: 'Customer Not Found' });
      }
    })
  );

export default customerRouter