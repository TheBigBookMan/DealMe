import { Router } from "express";
import apiRoutes from "./api";

Router.use("/api", apiRoutes);

Router.use((req, res) => res.send("Wrong route!"));

export default Router;
