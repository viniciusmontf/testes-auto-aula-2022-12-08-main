import express, { Router } from "express"
import { romanoController } from "./controller";

const app = express()

const route = Router()

route.get("/romano/:numero", romanoController);

app.use(express.json());
app.use(route);


app.listen(3000, () => {
    console.log("porta 3000");
})
