import { MongoClient } from "mongodb";
import { DATABASE_URL } from "./constants";

export class Database {
  private client = new MongoClient(DATABASE_URL, { useNewUrlParser: true });

  public async connect() {
    if (!this.client.isConnected()) {
      await this.client.connect();
    }
  }

  public async getEstabelecimento(coUnidade: number) {
    return await this.client
      .db("paciente")
      .collection("estabelecimentos")
      .findOne({ CO_UNIDADE: Number(coUnidade) });
  }
}
