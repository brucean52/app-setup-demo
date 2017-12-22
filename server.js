const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.port || 9000;

const app = express();
//cors is only for testing
app.use(cors());

app.use(express.static(path.resolve( __dirname, 'client', 'dist')));

app.get('/api/get-stuff', (req, res)=>{
    const stuff = {
        name: 'stuffins',
        message: 'here is some stuff'
    };

    res.send(stuff);    
});

app.get('/api/better-stuff', (req,res)=>{
    const betterStuff = {
        name: 'bet her',
        message: 'all day',
        better: 'her'
    }

    res.send(betterStuff);
});

//pointing to html file
app.get("*", (req, res) => {
    res.send(path.resolve(__dirname, 'client', 'dist', index.html));
});

app.listen(PORT, () => {
   console.log('Server running at localhost:' + PORT); 
});