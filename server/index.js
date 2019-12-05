//? Importing required server/db packages
require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const mongoose = require("mongoose");

//? Destructuring secret variables from .env
const {
  SERVER_PORT,
  SESSION_SECRET,
  CONNECTION_STRING,
  ATLAS_URI
} = process.env;

const app = express();

app.use(express.json());

//? Building Session
app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);

//! SQL initialization
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log(`SQL Initialized`);
});
//! Mongo initialization
mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const connection = mongoose.connection;
connection.once("open", () => console.log("Mongo Initialized"));

//? Importing controllers as well as building out endpoints
const cc = require("./controllers/cartController");
const ic = require("./controllers/inventoryController");
//! Inventory Endpoints
app.get("/api/products/inventory", cc.getInventory);
app.get("/api/products/cart", cc.getCart);
app.delete("/api/products/cart/:id", cc.cartRemove);
//! Product Endpoints
app.get("/api/products/:productName", ic.getProduct);

//! Laptop specific endpoints
app.get('/api/Laptops/:laptopName', ic.getSpecifiedLaptop)

app.listen(SERVER_PORT, () => {
  console.log(`Server up and running on port ${SERVER_PORT}`);
});