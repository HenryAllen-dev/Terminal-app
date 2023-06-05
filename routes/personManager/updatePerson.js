import inquirer from "inquirer";
import fs from "fs";
import { filePath } from "../../initialData.js";
import { personManager } from "./index.js";
import { clearCli } from "../../clearCli.js";
import { spinner } from "../../index.js";
export const updatePerson = () => {
  const buffer = fs.readFileSync(filePath);
  const dataArray = JSON.parse(buffer);
  inquirer
    .prompt({
      type: "list",
      name: "selected",
      message: "Select someone to change",
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
          .then((newUser) => {
            const index = dataArray.findIndex(
              (item) => item.id === res.selected
            );
            dataArray[index] = { ...newUser, id: res.selected };
            try {
              fs.writeFileSync(filePath, JSON.stringify(dataArray));
              spinner.info("Person Changed !");
              setTimeout(() => {
                clearCli();
                personManager();
              }, 2000);
            } catch (err) {
              throw err;
            }
          });
      }
    });
};
