import { MongoClient } from "mongodb";
import { DATABASE_NAME, DATABASE_URL } from "./constants";

export class Database {
  private client = new MongoClient(DATABASE_URL, { useNewUrlParser: true });

  public async connect() {
    await this.client.connect();
  }

  public async disconnect() {
    if (this.client.isConnected()) {
      await this.client.close();
    }
  }
}
