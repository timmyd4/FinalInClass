//Import Express
import express from 'express';

//Set app to express
const app = express();

//Allow data to be parsed correctly
app.use(express.urlencoded({ extended: true }));

//Set the view engine
app.set('view engine', 'ejs');

//serve static files from the public directory
app.use(express.static('public'));

//Define the port
const PORT = 3000;

let orders = [];

//Define the home route
app.get('/', (req, res) => {
    res.render('home');
})


//Define the form submission 
app.post('/summary', (req, res) => {
    const order = {
        bookTitle: req.body.bookTitle,
        comments: req.body.comments,
        rating: req.body.rating
    }

    orders.push(order);

    res.send(
        `
        <h1> Book Details Submitted! </h1>
        <h4> Book Title: ${order.bookTitle} </h4>
        <h4> Comments: ${order.comments} </h4>
        <h4> Rating: ${order.rating} </h4>
        <a href="/"> Go Back </a>
        `
    )

    res.render('/summary', {orders})
    

})



//Send the link to the website in the console
app.listen(PORT, () => {
    console.log(`Server is now running at http://localhost:${PORT}`);
})