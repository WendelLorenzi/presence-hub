import { Request, Response } from "express";
import { UserService } from "../services";

class UserController {
    private userService: UserService;
    constructor() {
        this.userService = new UserService();
    }
    async createUser(req: Request, res: Response) {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
        try {
            await this.userService.registerUser(email, password);
            res.status(200).json({message: "User created successfully"});
        } catch (error) {
            console.error('Error creating user:', error);
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

export default new UserController();