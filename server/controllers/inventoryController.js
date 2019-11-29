module.exports = {
  getProduct: (req, res) => {
    const db = req.app.get("db");
    const { productName } = req.params;
    db.get_inventory_item(productName)
      .then(item => res.status(200).send(item[0]))
      .catch(err => res.status(404).send("That Item does not exist", err));
  }
};
