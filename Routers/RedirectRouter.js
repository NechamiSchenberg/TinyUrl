import express from 'express';
import LinkController from "../Controllers/LinkController.js";
import RedirectController from '../Controllers/RedirectController.js';

const RedirectRouter = express.Router();
RedirectRouter.get("/:uniqueName", RedirectController.redirectLink);

export default RedirectRouter;