import mongoose from "mongoose";

class MongoDB {
  private readonly uri: string;
  //private readonly options: object;
  public client: mongoose.Mongoose;
  constructor(uri: string, options = {}) {
    this.uri = uri;
    // this.options = {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   ...options
    // };
    this.client = mongoose;
  }

  async connect() {
    try {
      await this.client.connect(this.uri);
      console.log("✅ Conectado ao MongoDB com sucesso!");
    } catch (err) {
      console.error("❌ Erro ao conectar ao MongoDB:", err);
      throw err;
    }
  }

  async disconnect() {
    try {
      await this.client.disconnect();
      console.log("🔌 Conexão com MongoDB encerrada.");
    } catch (err) {
      console.error("❌ Erro ao desconectar do MongoDB:", err);
      throw err;
    }
  }
}

export default MongoDB;
