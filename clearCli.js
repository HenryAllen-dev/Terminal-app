import figlet from "figlet";
import chalk from "chalk";
export const clearCli = () => {
  console.clear();
  figlet.text("Henry Allen", (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.log(err);
      return;
    }
    console.log(chalk.red(data));
  });
};
