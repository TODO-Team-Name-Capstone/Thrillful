import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

//makes code modeula instead of having all routes in server.js we can defin multiple files to have our routers. 
const userRouter=express.Router();


userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await User.remove({});

      //passing the data /users/customers. Was customers for Thrillful this is just video will do a new pull with all the same varibles our Capstone team has. 
      const createdUsers = await User.insertMany(data.users);
      res.send({ createdUsers });
    })
  );
  
  export default userRouter;

