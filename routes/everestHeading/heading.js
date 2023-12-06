const express = require('express');
const router = express.Router();
const headingController = require('../../controller/Everest/OverView');

router
    .get('/', headingController.getHeading)
    .post('/', headingController.createHeading)  // Add this line to enable POST requests
    .patch('/:id', headingController.updateHeading);
//   .patch('/:id')
module.exports = router;
