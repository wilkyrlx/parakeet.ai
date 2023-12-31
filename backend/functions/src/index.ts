import { onRequest } from "firebase-functions/v2/https";
import express, { Request, Response } from "express";
import * as logger from "firebase-functions/logger";
import * as functions from "firebase-functions";
import * as firebase from "firebase-admin";
import firebaseConfigSecret from "./secret/firebaseConfigSecret";
import cors from "cors";
import sendEmail from "./mailingService";

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

const prompts: string[] = [
    "Tell us a story about your favorite food! Why is it so special to you?",
    "Did anything happen today that made you happy? Tell us about them!",
    "What's one of your favorite childhood memories? What makes it so endearing to you?"
];

// TODO: change this
const collectionID = "debug"

function getUserID(req: Request): string {
    const userID = req.headers.userid;
    if (userID === undefined) {
        throw new Error("userID is undefined")
    } else {
        return userID as string
    }
}

app.get("/", (req: Request, res: Response) => {
    res.send("main page")
});

// Note: v1 complete
app.post("/register", (req: Request, res: Response) => {
    const userID = getUserID(req)
    
    const data: any = { 
        "email": req.body.email, 
        "password": req.body.password,
        "accountType": req.body.accountType
    }

    const curatorID = req.body.curatorID
    if (curatorID !== undefined) {
        data["curatorID"] = curatorID
    }

    db.collection(collectionID).doc(userID).collection('login').add(data)
        .catch((error) => {
            logger.error("Error adding document: ", error);
        });
    res.send({ message: "Registration Successful", accountType: data.accountType })
});

// Note: v1 complete
app.post('/login', (req, res) => {
    const userID = getUserID(req)

    const password = req.body.password;

    const passwordDoc = db.collection(collectionID).doc(userID).collection('login');
    passwordDoc.limit(1).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                // Access the first document
                const firstDocument = querySnapshot.docs[0];
                const data = firstDocument.data();
                console.log('First document data:', data);
                if (data.password === password) {
                    res.send({ message: "Login Successful", accountType: data.accountType, curatorID: data.curatorID })
                } else {
                    res.send({ message: "Login Failed", accountType: "" })
                }
            } 
        });
})

// TODO
app.get("/setPreferences", (req: Request, res: Response) => {
    console.log("editing preferences")
})

// Note: v1 complete
app.post("/addStoryToDB", (req: Request, res: Response) => {
    const userID = getUserID(req)

    const storyData = {
        "title": req.body.title,
        "content": req.body.content,
        "date": req.body.date,
    }

    db.collection(collectionID).doc(userID).collection('stories').add(storyData)
        .then((docRef) => {
            logger.log('Story added with ID: ', docRef.id);
        })
        .catch((error) => {
            logger.error('Error adding story: ', error);
        });
    res.send({ message: "data added" })
});

// Note: v1 complete
app.get("/getAllStoriesFromDB", (req, res) => {
    const userID = getUserID(req)
    const curatorID = req.headers.curatorid as string

    logger.log("reading the stories")

    db.collection(collectionID).doc(curatorID).collection('stories').get()
        .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
                return doc.data()
            })
            res.send(data)
        })
        .catch((error) => {
            logger.error("Error getting documents: ", error);
        });

})

app.get("/getPrompt", (req, res) => {
    const prompt = prompts[
        Math.floor(Math.random() * prompts.length)
    ]
    res.send({"prompt": prompt})
})

app.post("/sendEmail", async (req, res) => {
    sendEmail(req.body.destinationEmail, req.body.linkCode)
    res.send({message: "email sent"})
});


exports.app = functions.https.onRequest(app);
