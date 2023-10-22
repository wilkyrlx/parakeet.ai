import mailjetConfigSecret from "./secret/mailjetConfigSecret";
import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
    mailjetConfigSecret.apiKey,
    mailjetConfigSecret.secretKey
);

function sendEmail() {
    const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: "john_wilkinson@brown.edu",
                        Name: "John Wilkinson"
                    },
                    To: [
                        {
                            Email: "noah_h_kim@brown.edu",
                            Name: "Noah Kim"
                        }
                    ],
                    Subject: "Your email flight plan!",
                    TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                    HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
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