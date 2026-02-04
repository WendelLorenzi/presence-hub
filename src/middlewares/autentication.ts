import { Request,Response, NextFunction } from "express";

function autentication(req: Request, res: Response, next: NextFunction) {
        let token = req.headers["authorization"];

        if (!token) {
            return res.status(403).json({ error: "Token not provided" });
        }
        token = token.replace("Bearer ", "");

        if(token !== process.env.APP_TOKEN_SECRET) {
            return res.status(403).json({ error: "Invalid Token" });
        }

        if(token === process.env.APP_TOKEN_SECRET) {
            return next();
        }
}
export default autentication;