import { MongoClient } from "mongodb";
import { DATABASE_URL } from "./constants";

export class Database {
  private client = new MongoClient(DATABASE_URL, { useNewUrlParser: true });

  public async connect() {
    await this.client.connect();
    const connection = this.client.isConnected() ? "Connected" : "Disconnected";
    console.log(`Database is ${connection}`);
  }

  public async disconnect() {
    if (this.client.isConnected()) {
      await this.client.close();
    }
  }
}
