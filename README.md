# Parakeet.ai
Parakeet.ai is our submission for HackHarvard 2023! You can read more in our [devpost linked here!](https://devpost.com/software/parakeet-ai).

## Inspiration
Our project was inspired by CareYaya's ImmortalAI project, which seeks to create a digital avatar of a person that can be used to interact with their loved ones after they pass away. An issue we identified was that the process of collecting enough rich, personal data is a difficult and boring process if done incorrectly. Our goal was to design an application that would make the process of collecting data as easy and fun as possible for the elderly. 

Parakeet.ai accomplishes this by providing a simple, easy-to-use interface that allows users to share their stories, mannerisms, and personality. Engaging prompts encourage a wide variety of responses, and users can respond via text or speech-to-text. Our product engages all generations of users, from the elderly to their children and grandchildren. The "curator" - our term for the storyteller sharing their life - can share their stories with their loved ones, who are able to read the responses like a journal. 

For us, the AI digital avatar is an afterthought, not the main focus. We believe that the process of sharing stories should be fun and engaging. Families are always free to use the data collected in whatever way they wish to. If the curator wishes to use that data to create an AI avatar, they are free to do so. If they wish to simply share their stories with their loved ones, they are free to do so as well. All data will be stored securely and privately, and we do not sell any data to third parties.

## Features
- Accessibility
    - Parakeet.ai is designed to be as accessible as possible. The interface is simple and easy to use, and the prompts are designed to be engaging and fun. Rich prompts yield rich responses, after all.
    - Speech-to-Text allows users to respond to prompts via voice, and the text is automatically transcribed.
    - Users can set up accounts for loved ones easily, so the curator does not have to do anything but share their stories.

## Using Parakeet.ai
> [!WARNING]
> Parakeet.ai is still in a **very** early stage of prototyping, and many security features are demo-only. Passwords and authentication is not implemented securely, so please do not submit any sensitive information. We do not sell any data to third parties. We are not responsible for any data leaks or breaches that may occur.

### Principal
The principal is in charge of setting up the account for the curator and inviting viewers. They can also view the curator's responses. This person may be a family member or a caretaker, for example.
1. Go to [parakeet.ai](https://parakeet-5e1a9.web.app/) and click on "Register Curator" 
2. Enter all the personal information for the curator (the person sharing their stories). Click submit
3. Enter all the personal information for the principal (the person setting up the account). Click submit
4. In settings, click on "Invite Viewer" and enter the email of the viewer you wish to invite. Click submit when you are done
5. Go to [parakeet.ai](https://parakeet-5e1a9.web.app/) and login using your login credentials next time you use the app. You can view the curator's responses in the 'Read' tab and invite more viewers/change settings in the 'Settings' tab.

### Curator
The curator is the person sharing their stories. They can respond to prompts and are able to view their responses. This person may be an elderly person, for example.
1. Go to [parakeet.ai](https://parakeet-5e1a9.web.app/) and login using the credentials provided by the principal
2. That's it! You can respond to prompts in the 'Write' or 'Audio' tabs. You can view your responses in the 'View' tab.

### Viewer
The viewer is the person viewing the curator's responses. They can view the responses, but do not have privileges to change settings for the curator like the principal does. This person may be a child or grandchild, for example.
1. Use the link provided by the principal (sent via email) to create an account
2. Go to [parakeet.ai](https://parakeet-5e1a9.web.app/) and login using your login credentials next time you use the app. You can view the curator's responses in the 'Read' tab.



## Roadmap
We hope to expand this project to provide a better service to our users as well as generate more robust data for the option of highly accurate Immortal AIs. 
Our Roadmap going forward includes but is not limited to:
1. Integrating chatbots that can continue the conversation with our curators.
2. An embedded video speedfriending social media platform for our curators to socialize while opening a vector towards real likeness and personality modeling.
3. Adding an audio recorder that  records the actual voices during speech-to-text such that families have the option of authentic voice replication.
4. Integrating game-changing health features such as using ML models to non-invasively screen each audio recording for signs of early onset dementia or alzheimer's based on vocal patterns.



## Getting Started - Building, Running, Deploying
### To build the project:
1. Clone this repository
2. Install [Node.js](https://nodejs.org/en/download/). We use version 18.12.0 or higher
3. cd into the frontend directory and run `npm install`
4. cd into the backend directory and run `npm install`
5. cd into the functions directory and run `npm install` and `npm install -g firebase-tools`
6. Add a file named `firebaseConfigSecret.ts` to the secret directory in the functions directory. It should look like:
```
const firebaseConfigSecret = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

export default firebaseConfigSecret;
```

### To run the backend locally:
1. cd into the backend directory and run `npm start`

### To run the frontend locally:
1. cd into the frontend directory and run `npm start`
2. copy+paste the contents of dev.config.json into config.json
3. Note: depending on what port your backend is running on, you may need to change the backendUri in config.json

### To deploy the backend:
1. cd into the functions directory and run `firebase deploy --only functions`

### To deploy the frontend:
1. cd into the frontend directory and run `npm run build`
2. copy+paste the contents of prod.config.json into config.json
2. cd into the frontend directory and run `firebase deploy`


## Team Members
- [John Wilkinson](https://www.linkedin.com/in/john-wilkinson2025/): Backend, Frontend integration
- [Kokoro Yoneda Azharul](https://www.linkedin.com/in/kokoroazharul/): Strategy, Landing Page
- [Luna Wang](https://www.linkedin.com/in/luna-wang-a24003290/): Frontend, Design
- [Noah Kim](https://www.linkedin.com/in/noah-kim-4a9b89228/): Frontend, Speech-to-Text

