import inquirer from "inquirer";
import { addPerson } from "./addPerson.js";
import { allPeople } from "./allPeople.js";
import { updatePerson } from "./updatePerson.js";
import { removePerson } from "./removePerson.js";
import { initial } from "../initial.js";
import { clearCli } from "../../clearCli.js";
export const personManager = () => {
  inquirer
    .prompt([
      {
        name: "first",
        type: "list",
        choices: [
          { name: "Add person", value: "add" },
          { name: "All people", value: "all" },
          { name: "Update person", value: "update" },
          { name: "Remove Person", value: "remove" },
          { name: "Back", value: "back" },
        ],
        message: "Choose an option to do",
      },
    ])
    .then((answer) => {
      switch (answer.first) {
        case "add":
          addPerson();
          break;
        case "all":
          allPeople();
          break;
        case "update":
          updatePerson();
          break;
        case "remove":
          removePerson();
          break;
        case "back":
          clearCli();
          initial();

        default:
          break;
      }
    })
    .catch((err) => console.log(err));
};
