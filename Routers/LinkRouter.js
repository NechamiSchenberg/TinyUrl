import express from 'express';

import LinkController from "../Controllers/LinkController.js";

const LinkRouter = express.Router();

LinkRouter.post("/addLink", LinkController.addLink);
LinkRouter.get("/getLinks", LinkController.getLinks);

export default LinkRouter;