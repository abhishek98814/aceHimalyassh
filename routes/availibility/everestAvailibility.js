const express = require('express');
const AvailibiltyRouter = express.Router();
const availibiltyController = require('../../controller/availability/everestAvailibility')



AvailibiltyRouter
    .post('/', availibiltyController.selectTour)

module.exports = AvailibiltyRouter;