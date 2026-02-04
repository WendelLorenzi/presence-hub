import rateLimit from "express-rate-limit";

// Limite: 100 requisições por IP a cada 15 minutos
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo de requisições por IP
  message: {
    status: "error",
    message: "Too many requests from this IP, please try again later."
  },
  standardHeaders: true, // retorna info nos headers RateLimit-*
  legacyHeaders: false,  // desativa X-RateLimit-*
});
