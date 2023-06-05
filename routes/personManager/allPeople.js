import fs from "fs";
import inquirer from "inquirer";
import { filePath } from "../../initialData.js";
import Table from "cli-table";
import { personManager } from "./index.js";
import { clearCli } from "../../clearCli.js";
export const allPeople = () => {
  const table = new Table({ head: ["ID", "fullname", "email", "age"] });
  try {
    const buffer = fs.readFileSync(filePath);
    const dataArray = JSON.parse(buffer);
    dataArray.map((item) =>
      table.push([item.id, item.username, item.email, item.age])
    );
    console.log(table.toString());
    inquirer
      .prompt({ name: "back", type: "list", choices: ["Back"], message: " " })
      .then((res) => {
        clearCli();
        personManager();
      });
  } catch (err) {
    throw err;
  }
};
