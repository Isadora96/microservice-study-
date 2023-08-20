import express from "express";
import { json } from "body-parser";

import { currentuserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signuptRouter } from "./routes/signup";

const app = express();
app.use(json());

const PORT = 3000;

app.use(currentuserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signuptRouter);

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})