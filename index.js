const express = require('express')
const app = express()

app.use(express.json())

app.post('/log', (req, res) => {
    console.log({
        body: req.body
    });
    // const { type, data, action } = req.body
    // console.log({
    //     type,
    //     data,
    //     action
    // });

    res.status(200)
})

app.listen(80, () => {
    console.log('Logger listening on port 3000');
})