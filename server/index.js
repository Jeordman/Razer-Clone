require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const session = require("express-session");
const massive = require("massive");

const cc = require("./controllers/cartController");
const ic = require("./controllers/inventoryController");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

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

// massive(CONNECTION_STRING).then(db => {
//   app.set("db", db);
//   console.log(`Database Initialized`);
// });

app.get("/api/products/inventory", cc.getInventory);
app.get("/api/products/cart", cc.getCart);
app.delete("/api/products/cart/:id", cc.cartRemove);

app.get("/api/products/:productName", ic.getProduct);

app.listen(SERVER_PORT, () => {
  console.log(`Server up and running on port ${SERVER_PORT}`);
});
