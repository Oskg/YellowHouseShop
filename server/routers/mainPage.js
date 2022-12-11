const
    express = require("express"),
    mainRouter = express.Router(),
    CircularJSON = require('circular-json');
const request = require('request')
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
/*mainRouter.route('/register')
    .post((req,res) =>{
        req.body.uri = "http://25.21.246.243:8080/users"
        req(clientServerOptions, function (error, response) {
            console.log(error,response.body);
            return;
        });

})*/
mainRouter.post('/register', function(req, res) {
    // Get the form data from the request body
    const formData = req.body;

    // Generate the JSON data using the form data
    const json = generateJSON(formData.firstName, formData.lastName, formData.phoneNumber, formData.email, formData.address);

    // Use the request module to send a POST request to the specified URL
    request.post({
        url: 'http://25.21.246.243:8080/users',
        json: json
    }, function(error, response, body) {
        if (error) {
            // Handle any errors here
        } else {
            // Do something with the response from the server
            // For example, you could send a response back to the client
            res.send('Form submitted successfully!');
        }
    });
});




module.exports = mainRouter;