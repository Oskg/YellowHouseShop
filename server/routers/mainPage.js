const
    express = require("express"),
    mainRouter = express.Router();

mainRouter.route('/')
    .get((req, res) => {
        res.render('../public/html/index.html')
    })

module.exports = mainRouter;