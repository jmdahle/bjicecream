const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = 8080;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// DATA
const icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    { name: "pistachio", price: 11, awesomeness: 15 }
  ];

  // Routes
  app.get('/', (req, res) => {
    res.render('index', { icecreams });
  });
 
  app.get('/icecream/:name', (req, res) => {
    //Using handlebars and express, create a route called /icecream/:name. When the route is hit, it will display the name, price and awesomeness for that specific ice cream.
    const targetFlavor = req.params.name;
    const foundFlavor = icecreams.find( flavor => flavor.name=== targetFlavor);
    res.render('flavor', foundFlavor);
  });

  app.get('/icecreams', (req, res) => {
    // Create an /icecreams route. It will loop over all the ice creams and display them all to the user.
    res.render('allFlavors', { icecreams })
  });

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));