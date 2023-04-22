// const Cart = require("../models/Cart");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("./verifyToken");

// const router = require("express").Router();

// //CREATE

// router.post("/", verifyToken, async (req, res) => {
//   const newCart = new Cart(req.body);

//   try {
//     const savedCart = await newCart.save();
//     res.status(200).json(savedCart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //UPDATE
// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     const updatedCart = await Cart.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedCart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //DELETE
// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     await Cart.findByIdAndDelete(req.params.id);
//     res.status(200).json("Cart has been deleted...");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET USER CART
// router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.params.userId });
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // //GET ALL

// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const carts = await Cart.find();
//     res.status(200).json(carts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb+srv://eti461:Pennstate123@cluster0.tjwsvap.mongodb.net/test';
const dbName = 'test';

router.post('/cart', (req, res) => {
  // Extract the cart information from the request body
  const cart = req.body.cart;

  // Connect to the MongoDB server
  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.error('Failed to connect to MongoDB server', err);
      return res.status(500).json({ error: 'Failed to connect to MongoDB server' });
    }
    console.log('Connected to MongoDB server');

    // Get the database and the collection
    const db = client.db(dbName);
    const collection = db.collection('carts');

    // Insert the cart document into the collection
    collection.insertOne(cart, function(err, result) {
      if (err) {
        console.error('Failed to insert cart document', err);
        return res.status(500).json({ error: 'Failed to insert cart document' });
      }
      console.log('Inserted cart document', result.ops[0]);
      res.json({ success: true });
    });
  });
});

module.exports = router;
