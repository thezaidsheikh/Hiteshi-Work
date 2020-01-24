var express = require ('express');
var bodyParser= require ('body-parser');
const cors = require('cors');
require('./models/db');
const app = express();
const user = require('./routes/user.route'); // Imports routes for the products

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use('/user', user);


let port = 1234;

// used to tell the node to use this port number
app.listen(port,()=>{
    console.log(`server is up and ready to run on port ${port}`)
})

//ES6 is used here 
app.get('/', (req, res) => {
    res.send('Hello World')
  })