import mongoose from "mongoose";

import { app } from "./app";

const PORT = 3000;

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }

    try {
        await mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@${process.env.cluster}.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Connected to MongoDb');
    } catch(err) {
        console.log(err)
    }

    app.listen(PORT, () => {
        console.log('Listening on port', PORT)
    });
};

start();