const express = require("express")

const msgRouter = express.Router()

const msgCntrl = require("../controllers/messages")

const {MESSAGE,POSTMESSAGE} = require('../utils/constants/app_constants').ROUTES.MESSAGES;

msgRouter.get(MESSAGE,msgCntrl.getMessages);

msgRouter.post(POSTMESSAGE,msgCntrl.postMessage);

module.exports = msgRouter;



