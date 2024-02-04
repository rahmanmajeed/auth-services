import fs from "fs";
import path from "path";
import { parseBuffer } from "../../helpers/parser";

export const getEnv = () => {
  const envFilePath = path.join(process.cwd(), ".env");
  const bufferEnv = fs.readFileSync(envFilePath, "utf-8");
  const envObject = parseBuffer(bufferEnv);

  Object.keys(envObject || {}).map((key) => {
    if (!process.env[key] && process.env[key] !== envObject[key]) {
      process.env[key] = envObject[key] as string;
    }
  });

  return process.env
};
