import { IPresence } from "../providers/mongoDB/interfaces/IPresence";
import { PresenceRepository } from "../repository";

class PresenceService {
  private presenceRepository: PresenceRepository;

  constructor() {
    this.presenceRepository = new PresenceRepository();
  }

  async checkIn(name: string, phone: string): Promise<IPresence> {
    return await this.presenceRepository.checkIn(name, phone);
  }

  async checkOut(name: string): Promise<void> {
    return await this.presenceRepository.checkOut(name);
  }

  async getByPhone(phone: string): Promise<IPresence[]> {
    return await this.presenceRepository.getByPhone(phone);
  }

  async listAll(): Promise<IPresence[]> {
    return await this.presenceRepository.listAll();
  }
}

export default PresenceService;
