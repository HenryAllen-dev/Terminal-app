import fs from "fs";
import inquirer from "inquirer";
import { filePath } from "../../initialData.js";
import { nanoid } from "nanoid";
import { personManager } from "./index.js";
import { clearCli } from "../../clearCli.js";
import { spinner } from "../../index.js";
export const addPerson = () => {
  inquirer
    .prompt([
      {
        name: "username",
        type: "input",
        message: "Fullname?",
      },
      {
        name: "email",
        type: "input",
        message: "Email?",
      },
      {
        name: "age",
        type: "input",
        message: "Age?",
      },
    ])
    .then((data) => {
      try {
        const state = fs.readFileSync(filePath);
        const dataArray = JSON.parse(state);
        dataArray.push({ ...data, id: nanoid(4) });
        try {
          fs.writeFileSync(filePath, JSON.stringify(dataArray));
          spinner.succeed("Person Created !");
          setTimeout(() => {
            clearCli();
            personManager();
          }, 2000);
        } catch (err) {
          spinner.fail("There is a problem !");
          throw err;
        }
      } catch (err) {
        throw err;
      }
    });
};
