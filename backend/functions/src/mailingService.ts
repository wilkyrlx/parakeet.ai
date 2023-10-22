import mailjetConfigSecret from "./secret/mailjetConfigSecret";
import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
    mailjetConfigSecret.apiKey,
    mailjetConfigSecret.secretKey
);

function sendEmail(destinationEmail: string, linkCode: string) {

    const referralLink = `https://parakeet-5e1a9.web.app/?curator=${linkCode}`
    const rickRoll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

    const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: "harvardparakeetai@gmail.com",
                        Name: "Parakeet"
                    },
                    To: [
                        {
                            Email: destinationEmail,
                        }
                    ],
                    Subject: "Urgent Message from Pear the Parakeet",
                    TextPart: `Hi! I'm Pear the Parakeet! Do you love your family? If yes, ${referralLink}! If no, ${rickRoll}!`,
                    HTMLPart: `<p>Hi! I'm <strong>Pear the Parakeet</strong>!</p><p>Do you love your family? If yes, click <a href=\"${referralLink}\">here</a>!</p><p>If no, click <a href=\"${rickRoll}\">here</a>!</p>`,
                }
            ]
        })

    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
}

export default sendEmail;