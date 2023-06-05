import path from "path";
import { env } from "process";
import fs from "fs";
const documentsFolder = env.USERPROFILE + "\\Documents";
const fileName = "henry-cli-app.json";
export const filePath = path.join(documentsFolder, fileName);
export const initialData = () => {
  if (fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath);
      return JSON.parse(data);
    } catch (err) {
      throw err;
    }
  } else {
    try {
      fs.writeFileSync(filePath, JSON.stringify([]));
      return [];
    } catch (err) {
      throw err;
    }
  }
};
