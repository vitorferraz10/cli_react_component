#! /usr/bin/env node
const { program } = require("commander");
const createComponentReact = require("./src/view");

program
  .command("c")
  .description("Create function component react")
  .action(createComponentReact);

program.parse();
