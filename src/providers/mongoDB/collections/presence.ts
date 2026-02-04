import mongoose, { Schema, Model } from "mongoose";
import { IPresence } from "../interfaces/IPresence";

const presenceSchema = new Schema<IPresence>(
  {
    name: { type: String, required: true, unique: true },
    phone: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Presence: Model<IPresence> = mongoose.model<IPresence>("presence", presenceSchema);
export default Presence;
