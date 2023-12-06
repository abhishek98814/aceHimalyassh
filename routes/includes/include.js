const express = require('express');
const includeRouter = express.Router()

const includeController = require('../../controller/includes/EversetsIncludes')

includeRouter
    .post('/', includeController.createInclude)
    .patch('/:id', includeController.updateIncluding)
    .get('/', includeController.getInclude)

module.exports = includeRouter
