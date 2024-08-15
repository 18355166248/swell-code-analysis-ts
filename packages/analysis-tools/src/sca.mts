import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .command("analysis")
  .description("analysis code and echo report")
  .action(async () => {
    chalk.blue("analysis code and echo report");
  });
