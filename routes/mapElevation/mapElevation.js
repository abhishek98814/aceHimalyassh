const express = require('express');
const mapRouter = express.Router();
const mapController = require('../../controller/mapElevetion/mapElevation');
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

mapRouter.post('/', upload.single('image'), mapController.createMapElevation);

module.exports = mapRouter;
