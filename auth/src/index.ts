import express from "express";
import { json } from "body-parser";

import { currentuserRouter } from "./routes/current-user";

const app = express();
app.use(json());

const PORT = 3000;

app.use(currentuserRouter);

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})