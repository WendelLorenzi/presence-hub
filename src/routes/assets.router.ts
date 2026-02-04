import { Router } from "express";
import multer from "multer";
import autentication from "../middlewares/autentication";
import { AssetsController } from "../controllers";

const assetsRouters = Router();
const upload = multer({ storage: multer.memoryStorage() });
assetsRouters.get('/assets/:id/image', AssetsController.getAssetById);

assetsRouters.patch('/asset/:id', autentication, upload.single('image'),AssetsController.updateAsset);

assetsRouters.post('/assets', autentication, upload.single('image'), AssetsController.createAsset);

export default assetsRouters;