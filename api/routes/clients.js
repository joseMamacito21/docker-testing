const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// @route POST /api/client
// @desc  Route to add a client
// @access Public
router.post('/', (req, res) => {
  const { email, name, modules, password } = req.body;
  const newClient = new Client({ email, name, modules, password });
  newClient.save()
    .then(() => res.json({ success: true }))
});

router.get('/', (req, res) => {
  Client.find()
    .then(clients => res.json(clients));
})

module.exports = router;