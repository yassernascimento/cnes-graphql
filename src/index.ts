import { Database } from "./database";
import { Server } from "./server";

(async function start() {
  const server = new Server();
  server.start();

  const database = new Database();
  await database.connect();
  // await database.foo();
  await database.disconnect();
})();
