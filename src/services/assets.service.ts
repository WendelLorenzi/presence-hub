import { AssetRepository } from "../repository";

class AssetService {
    private readonly assetRepository: AssetRepository;
    constructor() {
        this.assetRepository = new AssetRepository();
    }

    async findAssetById(id: string) {
        const asset = await this.assetRepository.getAssetById(id);
        return { title: asset.name, image: asset.image, mimeType: asset.mimeType };
    }

    async createAsset(name: string, image: Buffer, mimeType: string) {
        return await this.assetRepository.createAsset(name, image, mimeType);
    }

    async updateAsset(id: string, name: string, image: Buffer, mimeType: string) {
        return await this.assetRepository.updateAsset(id, { name, image, mimeType });
    }
}

export default AssetService;