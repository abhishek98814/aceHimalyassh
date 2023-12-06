const express = require('express');
const faqRouter = express.Router();
const faqController = require('../../controller/faq/EverestFaq');

faqRouter.post('/', faqController.createFaq)

module.exports = faqRouter;