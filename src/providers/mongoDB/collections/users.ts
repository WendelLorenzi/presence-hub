import { Schema, Model } from "mongoose";
import { IUser } from "../interfaces/IUser";
import datawarehouse from "../../../datasource";

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  passwordHash: {
    type: String,
    required: true
  }
});

const User: Model<IUser> = datawarehouse.client.model<IUser>("users", userSchema);
export default User;
