let express = require('express')
let cors = require('cors')
let app = express()
let Sequelize = require('sequelize');

// instantiate the library for use, connecting to the sqlite database file
let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'todos.sqlite'
})

// If port is set in environment variable use that port
// if not, use port 5000
const PORT = process.env.PORT || 5000

// Enable CORS middleware
app.use(cors());
// Enable receiving data in JSON format
app.use(express.json());
// Enable receiving data from HTML forms
app.use(express.urlencoded({ extended: false }));

// START: Your code below




// STOP: Don't change anything below this line

app.listen(PORT, function () {
    console.log("Server started...")
});