import express from "express";
import { SERVER_PORT } from "./constants";

export class Server {
  private app = express();

  public start() {
    this.app.get("/", (req, res) => res.send("Hello World"));
    this.app.listen(SERVER_PORT, () =>
      console.log(`Server is listening on port ${SERVER_PORT}`)
    );
  }
}
