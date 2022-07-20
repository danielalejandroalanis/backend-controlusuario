const express = require("express");
const router = express.Router();
const Model = require("../models/users");

// Create User
router.post("/create", async (req, res) => {
  const data = new Model({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email_address: req.body.email_address,
    type: req.body.type,
  });

  //Trying to save data
  try {
    const saveData = await data.save();
    res.status(200).json(saveData._id);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//List all users
router.get("/list", async (req, res) => {
  //Trying to get all data
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
