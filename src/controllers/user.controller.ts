import { Request, Response } from "express";
import UserService from "../services/user.service";

class UserController {
    private readonly userService: UserService;
    constructor() {
        this.userService = new UserService();
    }
    async createUser(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const user = await this.userService.registerUser(email, password);
            res.status(200).json({user, token: process.env.APP_TOKEN_SECRET});
        } catch (error) {
            res.status(400).json({ error });
        }

    }

    async loginUser(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const token = await this.userService.loginUser(email, password);
            res.status(200).json({ token });
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

export default UserController;