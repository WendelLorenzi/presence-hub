import { Router } from "express";
import autentication from "../middlewares/autentication";
import { UsersController } from "../controllers";

const userRouters = Router();

userRouters.post('/user/register', autentication, (req, res) => UsersController.createUser(req, res));
userRouters.post('/user/login', (req, res) => UsersController.loginUser(req, res));

export default userRouters;