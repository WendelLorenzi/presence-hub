import { Router } from "express";
import autentication from "../middlewares/autentication";
import { PresenceController } from "../controllers";

const presenceRouter = Router();

presenceRouter.post('/presence/checkin', PresenceController.checkIn);

presenceRouter.post('/presence/checkout', PresenceController.checkOut);

presenceRouter.get('/presence/:phone/group', PresenceController.getByPhone);

presenceRouter.get('/presence/list', autentication, PresenceController.listAll);

export default presenceRouter;