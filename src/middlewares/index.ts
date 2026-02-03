function authMiddleware(req, res, next) {
  let token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "Token obrigatório" });

  try {
    token =token.replace("Bearer ", "");
    if(token === process.env.APP_TOKEN) {
        return next();
    }
  } catch (err) {
    res.status(403).json({ error: "Token inválido" });
  }
}

export default authMiddleware;
