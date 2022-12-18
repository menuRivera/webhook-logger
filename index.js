const express = require('express')
const app = express()

app.use(express.json())

app.post('/log', (req, res) => {
    console.dir(req.body, { depth: null })

    res.status(200).json({ success: true })
})

app.get('/', (req, res) => {
    res.send('Nothing to see here')
})

app.listen(80, () => {
    console.log('Logger listening');
})