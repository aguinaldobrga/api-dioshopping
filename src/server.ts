import "reflect-metadata";
import express, { Request, Response} from "express";
import cors from "cors";
import { router } from "./routes";
import "./database";

const app = express();

const host = "http://localhost";
const port = 5000;

app.use(cors());

app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`Servidor rodando na ${host}:${port}`)
})
