import prisma from "@/prisma";
import chalk from "chalk";

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log(chalk.green("Database connected"));
  } catch (error) {
    console.log(chalk.bgRed("Database connection failed"));
    console.log(error);
  }
};
