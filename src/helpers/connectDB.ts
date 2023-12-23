import chalk from "chalk";
import prisma from "../../prisma";

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log(chalk.green("Database connected"));
  } catch (error) {
    console.log(chalk.bgRed("Database connection failed"));
    console.log(error);
  }
};
