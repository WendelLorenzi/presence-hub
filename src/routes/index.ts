import { Router } from "express";
import UserController from "../controllers/user.controller";
import autentication from "../middlewares/autentication";
import assetsRouters from "./assets.router";
import userRouters from "./user.router";

const router = Router();


router.use('/v1', router);

router.get('/api', (req, res) => {
  res.send('API is working!');
});

router.use(assetsRouters);
router.use(userRouters);

export default router;