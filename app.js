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

// Start: Change only below this line

// uncomment this when you have created the todo model
// const Todo = sequelize.import("./models/todos.js");

// View all todos
// Happy Path: returns all todos in an array in JSON format
// Sad Path: None
app.get("/todos", function(){

});

// View single todo
// Happy Path: returns the requested todo item in JSON format
// Sad Path: the requested todo item does not exist
// Sad Path: refused to save
app.get("/todos/:id", function(){

});

// Update specific todo
// Happy Path: updates the requested todo item
// Sad Path: the requested todo item does not exist
// Sad Path: refused to save
app.patch("/todos/:id", function(){

});

// Delete a todo
// Happy Path: deletes the requested todo item
// Sad Path: the requested todo item does not exist
app.delete("/todos/:id", function(){

});

// STOP: Don't change anything below this line

app.listen(PORT, function () {
    console.log("Server started...")
});