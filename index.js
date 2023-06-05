import figlet from "figlet";
import chalk from "chalk";
import ora from "ora";
import { initialData } from "./initialData.js";
import { initial } from "./routes/initial.js";
import { Command } from "commander";
const program = new Command();
const state = initialData();
export const spinner = ora("Loading").start();

// commander
program
  .name("HenryAllen-Cli")
  .description("Just a simple cli app")
  .version("1.0.0");
// program
//   .command("add <name> <email> <age>")
//   .description("Add new Person")
//   .action((name,email,age) => {
//     console.log(name, email, age);
// });

setTimeout(() => {
  figlet.text("Henry Allen", (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.log(err);
      return;
    }
    console.log(chalk.red(data));
    console.log(
      chalk.cyan("Welcome to ") +
        chalk.bgBlue.bold.black("Henry Allen") +
        chalk.cyan(" cli app ")
    );
    spinner.stop();
    initial();
  });
}, 2000);
