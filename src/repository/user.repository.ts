import User from "../providers/mongoDB/collections/users";
import AppError from "../utils/error/appError";
import { comparePassword, generateHash } from "../utils/hashFactory";


class UserRepository {
    constructor() {}
    async createUser(email: string, password: string) {
        const passwordHash = await generateHash(password);
        const newUser = new User({ email, passwordHash });
        return await newUser.save();
    }
    async loginUser(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) throw new AppError("User Not Found", 404);

    const isValid = await comparePassword(password, user.passwordHash);
    if (!isValid) throw new AppError("Invalid Password", 401);
        return user;
    }
}

export default UserRepository;


