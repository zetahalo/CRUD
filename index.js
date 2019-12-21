const express = require('express');
const app = express();

const indexRoutes = require('./routes/index');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use('/', indexRoutes);

app.listen(8000, ()=>{
    console.log(`listening to the port 8000`);
});