import { Request,Response, NextFunction } from "express";

function autentication(req: Request, res: Response, next: NextFunction) {
        const token = req.headers["authorization"];

        if (!token || token.replace("Bearer ", "") !== process.env.APP_TOKEN_SECRET) {
            return res.status(403).json({ error: "Token inválido ou ausente" });
        }
        next();
}
export default autentication;