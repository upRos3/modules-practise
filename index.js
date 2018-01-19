var chalk = require("chalk");

var message = "Hello " + chalk.bold.underline.italic.strikethrough.bgRed("World");
console.log(message);