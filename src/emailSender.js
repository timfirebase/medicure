import * as emailjs from "emailjs-com";

function sendEmail(e, tempType) {

    var templateParams = {
        from_name : e.fromName,
        to_name : e.toName,
        message : e.message,
        to_mail : e.toMail
    };
    emailjs.send('service_bh1e9mq', tempType, templateParams, "user_rXFdbUGC883OnZ2dBYK1u")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}
export default sendEmail;