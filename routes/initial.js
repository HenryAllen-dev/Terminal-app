import inquirer from "inquirer";
import chalk from "chalk";
import { exit } from "process";
import { personManager } from "./personManager/index.js";
export const initial = () => {
  inquirer
    .prompt([
      {
        name: "first",
        type: "list",
        choices: [
          { name: "Person manager app", value: "pm" },
          { name: "About me", value: "about" },
          { name: "Contact me", value: "contact" },
          { name: "Exit", value: "exit" },
        ],
        message: "Choose an option to do",
      },
    ])
    .then((answer) => {
      switch (answer.first) {
        case "pm":
          personManager();
          break;
        case "about":
          console.log(
            chalk.green(
              "I'm MERN Stack developer and they call me " +
                chalk.bold.red("Henry Allen")
            )
          );
          break;
        case "contact":
          console.log(chalk.blackBright.bold.greenBright("https://Github.com/HenryAllen-dev"));
          break;
        case "exit":
          console.log(chalk.bold.black("Hope you enjoyed :)"));
          exit();

        default:
          break;
      }
    })
    .catch((err) => console.log(err));
};
