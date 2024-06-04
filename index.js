#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright.bold("\n \tWelcome to Currency Converter By 'ERAJ'\n"));
//define the list of currencies and their exchange rates.
let exchange_rate = {
    "USD": 1, //base currency
    "AUD": 1.65, //australian dollar
    "EUR": 0.9, //european currency(Euro)
    "JYP": 113, //Japenense currency(Yen)
    "CAD": 1.3, //Canadian dollar
    "PKR": 278.55, //Pakistani Rupees
};
//make a program to select currencies from user.
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the Currency to convert from:",
        choices: ["USD", "AUD", "EUR", "JYP", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the Currency to want to convert into:",
        choices: ["USD", "AUD", "EUR", "JYP", "CAD", "PKR"]
    },
    {
        name: "Amount",
        type: "input",
        message: "Enter the Amount to Convert:"
    }
]);
// doing currency conversion by using formula
let fromAmount = exchange_rate[userAnswer.from_currency];
let toAmount = exchange_rate[userAnswer.to_currency];
let amount = userAnswer.Amount;
//formula of conversion
let base_amount = amount / fromAmount;
let converted_amount = base_amount * toAmount;
//display the converted amount 
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
