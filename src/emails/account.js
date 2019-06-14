const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'arian_popalyar@yahoo.com',
        subject:'thanks for signing',
        text:`Welcome to the app. ${name}. glad to have u`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'arian_popalyar@yahoo.com',
        subject:'sorry to see you go',
        text:`We will miss you. ${name}. glad to have u`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
