// routes/homeRoutes/homeRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createHome1Image, updateHeading, getImageHeading } = require("../../controller/homeImages/homeImage1");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/create', upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
    { name: 'image5', maxCount: 1 }
]), createHome1Image);

router.put('/update/:id', updateHeading);
router.get('/get', getImageHeading);

module.exports = router;
