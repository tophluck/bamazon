# bamazon

This project is designed to simulate a product database system. running the js files in this repo simulate how a person of that role would interact with the database.

As is seen in the package.json, node is required with both the "inquirer" and "mysql" packages installed. You will also need a local sql server to connect to and store the data for the simulated database. Here is the starter sql code I used for the database:

-----------------------------------------------------------------

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(6, 2) NOT NULL,
stock_quantity INTEGER(4) NOT NULL,
PRIMARY KEY (item_id)
);

USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('pillow', 'home', 9.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('laptop', 'electronics', 650.00, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('t-shirt', 'clothes', 15.69, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('guitar', 'music', 155.55, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('silverware set', 'home', 12.25, 80);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('frozen dinner', 'food', 7.99, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('peanuts', 'food', 5.60, 42);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('television', 'electronics', 479.99, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('motor oil', 'car', 18.75, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('wacky wavey inflatible flailing arm man', 'important', 35.00, 500);

------------------------------------------------------------------------------

This should create the database and insert 10 dummy items into it.

To access the database as a customer (and purchase items), run the bamazonCustomer.js file using node. Once an item is purchased, your database should update it's "stock_quantity" for the choosen item to reflect the customer's purchase.