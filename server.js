const express = require('express');
const PORT = process.env.port || 9000;

const app = express();

app.get("*", (req, res) => {
    res.send('<h1>app demo is jkh working!</h1>');
});

app.listen(PORT, () => {
   console.log('Server running at localhost:' + PORT); 
});