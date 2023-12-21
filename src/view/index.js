const readline = require("readline");
const createFileToComponent = require("../controller/createFileComponent");
const createFolderToComponent = require("../controller/createFolder");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  rl.question(question, (answer) => {
    const data = answer.toString();
    createFolderToComponent(data);
    createFileToComponent(data);
    console.log("Created component!!");
  });
}

function createComponentReact() {
  ask("Name to your component: ");
}

module.exports = createComponentReact;
