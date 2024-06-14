//code to display the live webpage
var liveServer = require("live-server");
var params = {
    port: 8181,
    host: "0.0.0.0",
    root: ".", // Set root directory to current directory
    open: false,
    ignore: 'scss,my/templates',
    file: "index.html",
    wait: 1000,
    mount: [['/components', './node_modules']],
    logLevel: 2,
    middleware: [function(req, res, next) { next(); }]
};
liveServer.start(params);


// code for contact submission


require('dotenv').config(); // Load environment variables from .env file

const emailUser = process.env.EMAIL_USER;
console.log(emailUser); // Output: your-email@gmail.com


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Contact form route
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Use environment variable for email
            pass: process.env.EMAIL_PASS // Use environment variable for password
        }
    });

    // Email data
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECIPIENT, // Use environment variable for recipient
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error: Could not send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
