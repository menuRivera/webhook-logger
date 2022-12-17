const express = require('express')
const app = express()

app.use(express.json())

app.post('/log', (req, res) => {
    // console.log({
    //     body: req.body
    // });

    console.table({
        ...req.body
    })

    // console.warn({
    //     body: req.body
    // })

    res.status(200).json({ success: true })
})

app.get('/', (req, res) => {
    res.send('Nothing to see here')
})

app.listen(80, () => {
    console.log('Logger listening');
})