import { Document } from "mongoose";

export interface IAsset extends Document {
  name: string;
  image: Buffer;
  mimeType: string;
  createdAt: Date;
  updatedAt: Date;
}
