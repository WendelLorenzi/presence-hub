import { Router } from "express";
import assetsRouters from "./assets.router";
import userRouters from "./user.router";
import presenceRouter from "./presence.router";

const router = Router();


router.use('/v1', router);

router.get('/api', (req, res) => {
  res.send('API is working!');
});

router.use(assetsRouters);
router.use(userRouters);
router.use(presenceRouter);

export default router;