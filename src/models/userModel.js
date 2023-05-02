import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    fullName: String,
    email: {
      type: String,
      unique: true,
      trim: true,
      index: true,
      sparse: true,
    },
    password: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model('User', userSchema);

export default userModel;
