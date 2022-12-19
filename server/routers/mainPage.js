const
    express = require("express"),
    mainRouter = express.Router(),
    CircularJSON = require('circular-json');
const request = require('request')
const cors = require("cors");
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
mainRouter.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
mainRouter.use(bodyParser.json());
mainRouter.route('/')
    .get((req, res) => {
        res.render('../public/html/index.html')
    })
mainRouter.route('/login')
    .get((req) =>{


    } )
function generateJSON(firstName, lastName, phoneNumber, email, address) {
    return {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        address: address
    };
}


mainRouter.post('/register', (req, res) => {
    console.log(JSON.stringify(req.body))
    // send the request body to another URL
    const data = req.body;
    console.log(typeof(data))
    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
});



module.exports = mainRouter;