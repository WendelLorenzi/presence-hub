import app from "./app";
import datawarehouse from "./datasource";

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await datawarehouse.connect();
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        await datawarehouse.disconnect();
    }

  app.listen(PORT || 3000, () => console.log("🚀 Servidor rodando na porta 3000"));
})();
