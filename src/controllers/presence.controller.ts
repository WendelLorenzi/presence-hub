import { Request, Response } from "express";
import { PresenceService } from "../services";

class PresenceController {
  private presenceService: PresenceService;

  constructor() {
    this.presenceService = new PresenceService();
  }

  checkIn = async (req: Request, res: Response) => {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: "name e phone são obrigatórios" });
    }
    try {
      const presence = await this.presenceService.checkIn(name, phone);
      res.status(200).json({ message: "User checked in successfully", presence });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  checkOut = async (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    try {
      await this.presenceService.checkOut(name);
      res.status(200).json({ message: "User checked out successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  getByPhone = async (req: Request, res: Response) => {
    const { phone } = req.params;
    if(!phone) {
        return res.status(400).json({ error: "Phone is required" });
    }
    try {
      const presence = await this.presenceService.getByPhone(phone.toString());
      res.status(200).json({ phone, presence });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  listAll = async (req: Request, res: Response) => {
    try {
      const history = await this.presenceService.listAll();
      res.status(200).json({ history });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default new PresenceController();
