import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';
import User from '../models/usersModel.js';
import protect from '../middlewares.js';

const userRouter = express.Router();

userRouter.post(
  '/login',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'invalid email or password' });
  })
);

// userRouter.get(
//   '/profile',
//   protect,
//   expressAsyncHandler(async (req, res) => {
//     res.send(req.user);
//   })
// );

export default userRouter;
//
