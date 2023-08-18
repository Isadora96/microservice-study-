import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

const PORT = 3000;

app.get('/api/users/currentuser', (req, res) => {
    res.send('...');
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})