import UserRepository from "../repository/user.repository";
import AppError from "../utils/error/appError";


class UserService {
    private readonly userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async registerUser(email: string, password: string) {
        return await this.userRepository.createUser(email, password);
    }

    async loginUser(email: string, password: string) {
        const user = await this.userRepository.loginUser(email, password);
        if(!user) {
            throw new AppError("Login failed", 401);
        }
        return process.env.APP_TOKEN_SECRET;
    }
}

export default UserService;