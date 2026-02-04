import { UserRepository } from "../repository";
import AppError from "../utils/error/appError";

class UserService {
    private readonly userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async registerUser(email: string, password: string) {
        try {
            const existingUser = await this.userRepository.loginUser(email, password);
            if (!existingUser) {
                await this.userRepository.createUser(email, password);
            }
            throw new AppError("User already exists", 409);
            
        } catch (error) {
            throw error;
        }
    }

    async loginUser(email: string, password: string) {
        const user = await this.userRepository.loginUser(email, password);
        if(!user) {
            return null;
        }
        return process.env.APP_TOKEN_SECRET;
    }
}

export default UserService;