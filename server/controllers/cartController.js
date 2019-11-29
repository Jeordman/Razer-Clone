module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db");
    db.get_inventory()
      .then(inventory => {
        console.log(req.session)
        res.status(200).send(inventory);
      })
      .catch(err => res.status(500).send(`${err}`));
  },
  getCart: (req, res) => {
    const db = req.app.get("db");
    db.get_cart()
      .then(cart => {
        res.status(200).send(cart);
      })
      .catch(err => res.status(500).send(`${err}`));
  },
  cartRemove: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.cart_remove(id)
      .then(cart => {
        res.status(200).send(cart);
      })
      .catch(err => res.status(500).send("error", { err }));
  }
};
