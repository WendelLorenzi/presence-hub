import { Document } from "mongoose";

export interface IPresence extends Document {
  name: string;
  phone: string;
  createdAt: Date;
}
