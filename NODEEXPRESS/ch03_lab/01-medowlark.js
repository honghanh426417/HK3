const express = require('express')
const app = express()
const port = process.env.PORT || 3009

app.get('/',(req, res) => {
    res.type('text/plain')
    res.send('D-Day Tour')

})
app.get('/about',(req, res) => {
    res.type('text/plain')
    res.send('About D-Day Tour')

})

app.use((err, res) =>{
    res.type('text/plain')
    res.status(404)
    res.send('404 - Server Error')
})

app.use((err, req, res, next) =>{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, ()=> console.log(
    `Express started on http://localhost:${port};` +
    `press Ctrl-C to terminate.` 
))
