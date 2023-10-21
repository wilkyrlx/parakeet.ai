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
    const email = req.body.email;
    const password = req.body.password;
    const data = { "email": email, "password": password }

    db.collection(collectionID).doc(userID).collection('login').add(data)
        .catch((error) => {
            logger.error("Error adding document: ", error);
        });
    res.send({ message: "Registration Successful" })
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
                    res.send({ message: "Login Successful" })
                } else {
                    res.send({ message: "Login Failed" })
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

    logger.log("reading the stories")

    db.collection(collectionID).doc(userID).collection('stories').get()
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

exports.app = functions.https.onRequest(app);
