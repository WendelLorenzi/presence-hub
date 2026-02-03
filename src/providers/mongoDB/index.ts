// db.js
import mongoose from "mongoose";

class MongoDB {
  uri: string;
  options: object;
  constructor(uri: string, options = {}) {
    this.uri = uri;
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ...options
    };
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log("✅ Conectado ao MongoDB com sucesso!");
    } catch (err) {
      console.error("❌ Erro ao conectar ao MongoDB:", err);
      process.exit(1); // encerra a aplicação se não conectar
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("🔌 Conexão com MongoDB encerrada.");
    } catch (err) {
      console.error("❌ Erro ao desconectar do MongoDB:", err);
    }
  }
}

export default MongoDB;
