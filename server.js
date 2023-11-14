const  express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const postsRouter = require('./routers/posts');

//file statici (immagini nella cartella public)
app.use(express.static('public'));

// configuro express per leggere i dati in formato json
app.use(express.json());

// configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/', postsRouter);


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})