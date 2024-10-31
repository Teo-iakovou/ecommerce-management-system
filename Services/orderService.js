const { client } = require("../db");
const mongodb = require("mongodb");

// Create a new order
exports.createOrder = async (orderData) => {
  const db = client.db("ecommerce");
  const result = await db.collection("orders").insertOne(orderData);
  return result.ops[0];
};

// Retrieve all orders
exports.getAllOrders = async () => {
  const db = client.db("ecommerce");
  return await db.collection("orders").find().toArray();
};

// Retrieve a specific order by ID
exports.getOrderById = async (id) => {
  const db = client.db("ecommerce");
  return await db
    .collection("orders")
    .findOne({ _id: new mongodb.ObjectId(id) });
};

// Update an order by ID
exports.updateOrder = async (id, updateData) => {
  const db = client.db("ecommerce");
  const result = await db
    .collection("orders")
    .findOneAndUpdate(
      { _id: new mongodb.ObjectId(id) },
      { $set: updateData },
      { returnOriginal: false }
    );
  return result.value;
};

// Delete an order by ID
exports.deleteOrder = async (id) => {
  const db = client.db("ecommerce");
  const result = await db
    .collection("orders")
    .deleteOne({ _id: new mongodb.ObjectId(id) });
  return result.deletedCount > 0;
};
