import inquirer from "inquirer";
import fs from "fs";
import { filePath } from "../../initialData.js";
import { personManager } from "./index.js";
import { clearCli } from "../../clearCli.js";
import { spinner } from "../../index.js";
export const removePerson = () => {
  const buffer = fs.readFileSync(filePath);
  const dataArray = JSON.parse(buffer);
  inquirer
    .prompt({
      type: "list",
      name: "selected",
      message: "Select someone to remove",
      choices: [
        ...dataArray.map((item) => ({ name: item.username, value: item.id })),
        "Back",
      ],
    })
    .then((res) => {
      if (res.selected === "Back") {
        clearCli();
        personManager();
      } else {
        const filtered = dataArray.filter((item) => item.id !== res.selected);
        try {
          fs.writeFileSync(filePath, JSON.stringify(filtered));
          spinner.info("Person Removed !");
          setTimeout(() => {
            clearCli();
            personManager();
          }, 2000);
        } catch (err) {
          spinner.fail("There is a problem !")
          throw err;
        }
      }
    });
};
