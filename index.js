const express = require('express');


const app = express();

const PORT=8080;
app.get('/',(req, res) => {
    res.status(200).json({message: 'Server is running'})
})

app.listen(PORT, ()=>{
    console.log('listening on port '+PORT);
})