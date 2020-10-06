import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import morgan from "morgan";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api/v1", router);



export { app };