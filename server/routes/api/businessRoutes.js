import { Router } from "express";
import businessController from "../../controller/businessController";

Router.route("/").get(businessController.getBusiness);

export default Router;
