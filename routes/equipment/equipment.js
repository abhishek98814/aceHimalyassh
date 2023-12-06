const express = require('express');
const equipRouter = express.Router(); // Instantiate the router
const equipController = require('../../controller/equipment/equipment');

equipRouter.post('/', equipController.createEquipment);

module.exports = equipRouter; 