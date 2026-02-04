import Asset from "../providers/mongoDB/collections/assets";
import { IAsset } from "../providers/mongoDB/interfaces/IAssets";
import AppError from "../utils/error/appError";

class AssetRepository {
  async createAsset(name: string, image: Buffer, mimeType: string): Promise<IAsset> {
    const id = 'asset'
    const newAsset = new Asset({ name, image, mimeType, id });
    return await newAsset.save();
  }

  async getAssetById(id: string): Promise<IAsset> {
    const asset = await Asset.findById(id);
    if (!asset) throw new AppError("Asset Not Found", 404);
    return asset;
  }

  async getAllAssets(): Promise<IAsset[]> {
    return await Asset.find();
  }

  async updateAsset(id: string, updateData: Partial<IAsset>): Promise<IAsset> {
    const asset = await Asset.findByIdAndUpdate(id, updateData, { new: true });
    if (!asset) throw new AppError("Asset Not Found", 404);
    return asset;
  }

  async deleteAsset(id: string): Promise<void> {
    const asset = await Asset.findByIdAndDelete(id);
    if (!asset) throw new AppError("Asset Not Found", 404);
  }
}

export default AssetRepository;
