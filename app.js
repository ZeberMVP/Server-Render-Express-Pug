const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).render("home");
});

app.get("film/:title", async (req, res) => {
    let response = await fetch (`https://www.omdbapi.com/?t=${req.params.title}&apikey=3a4d2f91`);
    let filmdata = await response.json();
    res.render("film", {"film": filmdata})
});



app.post('/film', (req, res) => {
    res.redirect(`/film/${req.body.title}`)
});


app.listen(port, () => {
    console.log(`Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`);
});