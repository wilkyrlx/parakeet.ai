/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import express, { Request, Response } from "express";
import * as logger from "firebase-functions/logger";
import * as functions from "firebase-functions";
import * as firebase from "firebase-admin";
import firebaseConfigSecret from "./secret/firebaseConfigSecret";
import cors from "cors";

const firebaseConfig = firebaseConfigSecret
firebase.initializeApp(firebaseConfig);
const app = express()
const db = firebase.firestore();
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

const userID = "dummy_user_id"

export const helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send({ message: "Hello from Firebase!" });
});

app.get("/", (req: Request, res: Response) => {
    console.log("base page")
    res.send("main page")
});

const users: any[] = [];

app.post("/register", (req: Request, res: Response) => {
    const newusername = req.body.user;
    const newpassword = req.body.pass;
    const data = { "username": newusername, "password": newpassword }
    db.collection("test").add(data)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        }); 
    res.send({ message: "Registration Sucessful"} )
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (users[username] === password) {
        res.send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Login failed' });
    }
});

app.get("/SetPreferences", (req: Request, res: Response) => {
    console.log("editing preferences")
})

app.post("/addStoryToDB", (req: Request, res: Response) => {
    console.log("adding stories here")
    res.send({ message: "data" })
    const textstory = req.body.textstory
    const title = req.body.title
    const date = req.body.date
    const storydata = {
        textstory,
        title,
        date,
    }
});

app.get("/getAllStories", (req, res) => {
    console.log("reading the stories")
    return req.body.stories
})

exports.app = functions.https.onRequest(app);
