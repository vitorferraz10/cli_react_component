#! /usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const { program } = require("commander");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFolderToComponent(folderName) {
  const pathWithFolderSrc = __dirname + "/src/components/";

  if (!fs.existsSync(pathWithFolderSrc + `${folderName}`)) {
    fs.mkdirSync(pathWithFolderSrc + folderName, { recursive: true });
  }
}

function contentFunctionComponent(nameComponent) {
  const nameComponentWithFirstLetterUpperCase =
    nameComponent.charAt(0).toUpperCase() + nameComponent.slice(1);
  return `
  import React from 'react'
  
  export function ${nameComponentWithFirstLetterUpperCase}(){
    return(
      <>
        <h1>${nameComponentWithFirstLetterUpperCase}</h1>
      </>
    )
  }`;
}

function createFileToComponent(fileName) {
  const path = `${__dirname}/src/components/${fileName}/`;

  if (fs.existsSync(path)) {
    const pathToCreateComponent = `${path}/${fileName}.tsx`;

    fs.writeFile(
      pathToCreateComponent,
      contentFunctionComponent(fileName),
      function (err) {
        if (err) console.error("err:>>", err);
        console.log("component created");
      }
    );
  }
}

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

program
  .command("c")
  .description("Create function component react")
  .action(createComponentReact);

program.parse();
