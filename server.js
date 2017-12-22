const express = require('express');
const cors = require('cors');
const PORT = process.env.port || 9000;

const app = express();
//cors is only for testing
app.use(cors());

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

app.get("*", (req, res) => {
    res.send('<h1>app demo is jkh working!</h1>');
});

app.listen(PORT, () => {
   console.log('Server running at localhost:' + PORT); 
});