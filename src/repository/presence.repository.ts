import Presence from "../providers/mongoDB/collections/presence";
import { IPresence } from "../providers/mongoDB/interfaces/IPresence";
import AppError from "../utils/error/appError";


class PresenceRepository {
  async checkIn(name: string, phone: string): Promise<IPresence> {
    try {
      const presence = new Presence({ name, phone });
      return await presence.save();
    } catch (err: any) {
      if (err.code === 11000) {
        throw new AppError("This Name is already in use", 400);
      }
      throw err;
    }
  }

  async checkOut(name: string): Promise<void> {
    const presence = await Presence.findOneAndDelete({ name });
    if (!presence) throw new AppError("Presence not found", 404);
  }

  async getByPhone(phone: string): Promise<IPresence[]> {
    return await Presence.find({ phone });
  }

  async listAll(): Promise<IPresence[]> {
    return await Presence.find();
  }
}

export default PresenceRepository;
