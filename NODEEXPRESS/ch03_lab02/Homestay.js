const express = require('express');
const expressHandlebars = require('express-handlebars').engine;
const app1 = express()
app1.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app1.set('view engine', 'handlebars')
app1.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000

const newsData = [   
    {name: 'Product', image: '/img/home.jpg', price:'$38'},
    {name: 'Product1', image: '/img/home1.jpg', price:'$38'},
    {name: 'Product2', image: '/img/home2.jpg', price:'$38'},
    {name: 'Product3', image: '/img/home3.jpg', price:'$38'},
    {name: 'Product4', image: '/img/home4.jpg', price:'$38'},
    {name: 'Product6', image: '/img/home5.jpg', price:'$38'},
    {name: 'Product6', image: '/img/home6.jpg', price:'$38'},
    {name: 'Product7', image: '/img/home7.jpg', price:'$38'},
];

app1.get('/', (req, res) => res.render('home', { news: newsData }))



app1.get('/about', (req, res) => {
    res.render('about');
});

app1.use((req, res) => {
    res.status(404)
    res.render('404')
}
)

app1.use((err, req, res, next) => {
    console.error(err.messsage)
    res.status(500)
    res.render('500')
}
)

app1.listen(port, () => console.log(
    `Express started on http://localhost:${port};` +
    `press Ctrl-C to terminate.`))