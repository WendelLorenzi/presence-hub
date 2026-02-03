import { Router } from "express";
import UserController from "../controllers/user.controller";
import autentication from "../middlewares/autentication";

const router = Router();
const userController = new UserController();

router.use('/api', (req, res) => {
  res.send('API is working!');
});

router.use('/assets/:id', (req, res) => {
  // service to fetch and return asset by id
});

router.use('/user/register', autentication, userController.createUser);
router.use('/user/login', userController.loginUser);

export default router;