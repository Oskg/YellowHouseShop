const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const ejs = require('ejs')
const mainPage = require("./routers/mainPage");
require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000;
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'))
app.use('/',mainPage)
const start = async () => {
  try {
      app.listen(PORT,() => console.log((`Server started on PORT = ${PORT}`)))
  }catch (e){
      console.log(e);
  }
}
start();
