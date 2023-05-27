import { Router } from "express";
import businessRoutes from "./businessRoutes";

Router.use("/businesses", businessRoutes);

export default Router;
