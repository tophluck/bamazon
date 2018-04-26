var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "12BAll99@onthejob",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    inquirer.prompt([{
        type: "input",
        name: "product_id",
        message: "Which product would you like to buy? (type the ID number)",
    },
    {
        type: "input",
        name: "product_amount",
        message: "How many would you like to buy?",
    }
    ]).then(function (userInput) {
        var currentProduct = res[(userInput.product_id - 1)];
        if (userInput.product_amount > currentProduct.stock_quantity) {
            console.log("Sorry. We do not have that many " + currentProduct.product_name + " in stock.");
        } else {
            amountLeft = parseInt(currentProduct.stock_quantity) - parseInt(userInput.product_amount);
            amountSpent = parseFloat(currentProduct.price) * parseInt(userInput.product_amount)
            connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [amountLeft, currentProduct.item_id], function (error, results, fields) {
                if (error) throw error;
                // ...
                console.log("Your total is $" + amountSpent);
            });
        }
        connection.end();

    });

  });
}