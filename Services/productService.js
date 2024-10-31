const { client } = require("../db");
const mongodb = require("mongodb");

// Create a new product
exports.createProduct = async (productData) => {
  const db = client.db("ecommerce");
  const result = await db.collection("products").insertOne(productData); // Insert product into MongoDB

  if (result.insertedId) {
    return { _id: result.insertedId, ...productData }; // Return product with generated ID
  } else {
    throw new Error("Product insertion failed");
  }
};

// Retrieve all products
exports.getAllProducts = async () => {
  const db = client.db("ecommerce");
  return await db.collection("products").find().toArray();
};

// Retrieve a specific product by ID
exports.getProductById = async (id) => {
  const db = client.db("ecommerce");
  return await db
    .collection("products")
    .findOne({ _id: new mongodb.ObjectId(id) });
};

// Update a product by ID
exports.updateProduct = async (id, updateData) => {
  const db = client.db("ecommerce");
  const result = await db
    .collection("products")
    .findOneAndUpdate(
      { _id: new mongodb.ObjectId(id) },
      { $set: updateData },
      { returnOriginal: false }
    );
  return result.value; // Return the updated product document
};

// Delete a product by ID
exports.deleteProduct = async (id) => {
  const db = client.db("ecommerce");
  const result = await db
    .collection("products")
    .deleteOne({ _id: new mongodb.ObjectId(id) });
  return result.deletedCount > 0; // Return true if a document was deleted
};
