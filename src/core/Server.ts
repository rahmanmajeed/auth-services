import express, { Express, Request, Response } from "express";
import { IServer } from "../Interfaces/server";

class Server {
  app: Express = express();
  host;
  port;
  options;
  server: any;
  constructor({ host, port, options = {} }: IServer = {}) {
    const defaultPORT = process.env.PORT;
    this.host = host || process.env.HOST || "0.0.0.0";
    this.port = Number(port) || Number(defaultPORT) || 3333;
    this.options = options;
  }

  async start() {
    this.app.get("/hello", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
    });
    // server start...
    await new Promise<void>((r) => {
      this.server = this.app.listen(this.port, this.host, () => {
        console.log(
          `⚡️[server]: Server is running at ${this.host}:${this.port}`
        );

        r();
      });
    });
    return {
      express: this.app,
      server: this.server,
    };
  }
}
export default Server;
