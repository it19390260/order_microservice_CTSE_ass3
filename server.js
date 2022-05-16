const express = require('express'); // importing express module
const cors = require('cors'); // importing cors module
const bodyParser = require('body-parser'); // importing body-parser module
const port = process.env.PORT || 5000; //setting the port from the deployed env or assingning 5000 as the port constant
const mongoose = require('mongoose'); // importing mongoose module
const Db = require('./database/dbConfig').dbKey; // importing database key
const orderRoutes = require('./routes/orderRoutes');



const app = express(); // creating express app

// mongoose.connect(Db) //connecting mongoDb using mongoose
// .then(
//     console.log('Db connected!')
// )
// .catch((err)=>{
//     console.log(err);
// });

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err)
        console.log("Failed to connect! Err:", err)
    else
        console.log('Db connected!')
});


app.use(cors()); //using cors middleware as a connect

app.use(bodyParser.json()); // to accept json type requests

app.use('/api/order', orderRoutes); // order/cart  service interface

app.listen(port, () => { // setting the app to listen on the configured port
    console.log(`Listening on port: ${port}`);
});