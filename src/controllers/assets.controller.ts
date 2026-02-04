import { Request, Response } from "express";
import { AssetService } from "../services";

class AssetsController {
  private assetService: AssetService;

  constructor() {
    this.assetService = new AssetService();
  }

  getAssetById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }
    const asset = await this.assetService.findAssetById(id.toString());
    res.setHeader("Content-Type", asset.mimeType);
    return res.send(asset.image);
  };

  createAsset = async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }
    const { originalname, buffer, mimetype } = req.file;
    await this.assetService.createAsset(originalname, buffer, mimetype);
    res.status(200).send("Asset created successfully");
  };

  updateAsset = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }
    const { originalname, buffer, mimetype } = req.file;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    await this.assetService.updateAsset(id.toString(), originalname, buffer, mimetype);
    res.status(200).send("Asset updated successfully");
  }
}

export default new AssetsController();

