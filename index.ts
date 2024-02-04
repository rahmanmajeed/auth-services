// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';

import Server from "./src/Core/Server";

// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });


(async () => {
  try {
    let server = new Server();
    await server.start()
  } catch (e) {
    // console.error(e);
    process.exit(1);
  }
})();