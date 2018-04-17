const express = require('express');
const app = express();
const path = require('path');


//loads static files

app.use(express.static(path.join(__dirname + './../public'))); 

app.listen(3000, () => console.log('Server is now running on http://localhost:3000'));