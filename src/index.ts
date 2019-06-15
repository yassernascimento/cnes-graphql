import { Database } from "./database";
import { Server } from "./server";

(async function start() {
  const server = new Server();
  await server.start();

  const database = new Database();
  await database.connect();
  await database.disconnect();
})();
