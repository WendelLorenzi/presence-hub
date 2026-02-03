import app from "./app";
import MongoDB from "./providers/mongoDB";

const PORT = process.env.PORT || 3000;
const db = new MongoDB(process.env.DATABASE_URI || "");

(async () => {
  await db.connect();

  app.listen(PORT || 3000, () => console.log("🚀 Servidor rodando na porta 3000"));
})();
