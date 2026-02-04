import User from "../providers/mongoDB/collections/users";
import AppError from "../utils/error/appError";
import { comparePassword, generateHash } from "../utils/hashFactory";


class UserRepository {    
    async createUser(email: string, password: string) {
        const passwordHash = await generateHash(password);
        const newUser = new User({ email, passwordHash });
        const result= await newUser.save();
        return result;
    }
    async loginUser(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) return null;

    const isValid = await comparePassword(password, user.passwordHash);
    if (!isValid) throw new AppError("Invalid Password", 401);
        return user;
    }
}

export default UserRepository;


