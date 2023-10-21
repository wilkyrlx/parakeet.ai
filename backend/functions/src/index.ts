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

const app = express()

export const helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

app.get("/", (req: Request, res: Response) => {
  console.log("base page")
  res.send("main page")
});

const users: any[] = [];

app.post("/register", (req: Request, res: Response) => {
  const newusername = req.body.newusername;
  const newpassword = req.body.newpassword;
  users[newusername] =  newpassword
  res.send("Registration Sucessful")
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (users[username] === password) {
    res.send('Login successful');
  } else {
    res.status(401).send('Login failed');
  }
});

app.get("/SetPreferences", (req: Request, res: Response) => {
  console.log("editing preferences")
})

app.post("/addStoryToDB", (req: Request, res: Response) => {
  console.log("adding stories here")
  res.send("data")
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
