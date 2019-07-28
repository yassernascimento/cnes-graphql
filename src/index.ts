import { Database } from "./database";
import { Server } from "./server";

(async function start() {
  const database = new Database();
  await database.connect();

  const server = new Server(database);
  await server.start();
})();
