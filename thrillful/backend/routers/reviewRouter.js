// import express from 'express';
// import expressAsyncHandler from 'express-async-handler';
// import bcrypt from 'bcryptjs';
// import data from '../data.js'
// import Review from '../models/reviewModel.js'
// import { generateToken, isAdmin, isAuth } from '../utils.js';




// const reviewRouter = express.Router();


// reviewRouter.get('/seed',
//     expressAsyncHandler(async (req, res) => {
//         await Review.remove({});
//         const createdReviews = await Review.insertMany(data.reviews);
//         res.send({ createdReviews });
//     })
// );

// reviewRouter.post(
//     '/reviews',
//     expressAsyncHandler(async (req, res) => {
//       const review = await Review.One({ username: req.body.username });
//       console.log(review);
//       if (review) {
        
//           res.send({
//             _id: review._id,
//             email: review.email,
//             password: review.password,
//             token: generateToken(review),
//           });
//           return res;
        
//       }
//       res.status(401).send({ message: 'Invalid email or password' });
//     })
//   );

// reviewRouter.post(
//     '/register',
//     expressAsyncHandler(async (req, res) => {
//       const review = new Review({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         username: req.body.username,
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, 8),
//       });
//       const createdReview = await review.save();
//       res.send({
//         _id: createdReview._id,
//         first_name: createdReview.first_name,
//         last_name: createdReview.last_name,
//         username: createdReview.username,
//         email: createdReview.email,
//         isAdmin: createdReview.isAdmin,
//         token: generateToken(createdReview),
//       });
//     })
//    );

//    reviewRouter.put(
//     '/profile',
//     isAuth,
//     expressAsyncHandler(async (req, res) => {
//       const review = await Review.findById(req.user._id);
//       if (review) {
//         customer.username = req.body.name || customer.username;
//         customer.email = req.body.email || customer.email;
//         if (req.body.password) {
//           customer.password = bcrypt.hashSync(req.body.password, 8);
//         }
//         const updatedUser = await customer.save();
//         res.send({
//           _id: updatedUser._id,
//           first_name: updatedUser.first_name,
//           last_name: updatedUser.last_name,
//           username: updatedUser.username,
//           email: updatedUser.email,
//           isAdmin: updatedUser.isAdmin,
//           token: generateToken(updatedUser),
//         });
//       }
//     })
//   );

// customerRouter.get(
//     '/',
//     isAuth,
//     isAdmin,
//     expressAsyncHandler(async (req, res) => {
//       const customers = await Customer.find({});
//       res.send(customers);
//     })
//   );


// customerRouter.get(
//     '/:id',
//     isAuth,
//     isAdmin,
//     expressAsyncHandler(async (req, res) => {
//       const customer = await Customer.findById(req.params.id);
//       if (customer) {
//         res.send(customer);
//       } else {
//         res.status(404).send({ message: 'Customer Not Found' });
//       }
//     })
//   );

//   customerRouter.delete(
//     '/:id',
//     isAuth,
//     isAdmin,
//     expressAsyncHandler(async (req, res) => {
//       const customer = await Customer.findById(req.params.id);
//       if (customer) {
//         if (customer.email === 'shawnastaff@gmail.com') {
//           res.status(400).send({ message: 'Can Not Delete Admin User' });
//           return;
//         }
//         const deleteCustomer = await customer.remove();
//         res.send({ message: 'User Deleted', user: deleteCustomer });
//       } else {
//         res.status(404).send({ message: 'User Not Found' });
//       }
//     })
//   );
//   customerRouter.put(
//     '/:id',
//     isAuth,
//     isAdmin,
//     expressAsyncHandler(async (req, res) => {
//       const customer = await Customer.findById(req.params.id);
//       if (customer) {
//         customer.first_name = req.body.first_name || customer.first_name;
//         customer.last_name = req.body.last_name || customer.last_name;
//         customer.username = req.body.username || customer.username;
//         customer.email = req.body.email || customer.email;
//         customer.password = bcrypt.hashSync(req.body.password || customer.password, 8);
//         customer.isAdmin = Boolean(req.body.isAdmin);
//         const updatedCustomer = await customer.save();
//         res.send({ message: 'User Updated', customer: updatedCustomer });
//       } else {
//         res.status(404).send({ message: 'User Not Found' });
//       }
//     })
//   );

// export default customerRouter