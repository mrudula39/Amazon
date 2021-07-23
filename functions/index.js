const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51JD9u8SFPjLptyD3RZcbqg5Afm4MwIt3uJRMgHtHkniwmHo6wN46JqnZBFr0aOFhzj8SKNsaOzjru9xf51d2AG6K00cC91ZMg4');
//-App config
const  app = express();


//-Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/',(request, response) => res.status(200).send
('hello world'))   

//-Listen command
exports.api = functions.https.onRequest(app)




