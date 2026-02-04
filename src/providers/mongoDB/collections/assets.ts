import mongoose, { Schema, Model } from "mongoose";
import { IAsset } from "../interfaces/IAssets";

const assetSchema = new Schema<IAsset>(
  {
    name: { type: String, required: true },
    image: { type: Buffer, required: true },
    mimeType: { type: String, required: false }
  },
  {
    timestamps: true
  }
);

const Asset: Model<IAsset> = mongoose.model<IAsset>("assets", assetSchema);
export default Asset;
