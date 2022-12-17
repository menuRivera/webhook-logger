const app = require('express')()

app.post('/log', (req, res) => {
    const { type, data, action } = req.body
    console.log({
        type,
        data,
        action
    });

    res.status(200)
})

app.listen(80, () => {
    console.log('Logger listening on port 3000');
})