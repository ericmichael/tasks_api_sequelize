let express = require('express')
let cors = require('cors')
let app = express()
const Sequelize = require('sequelize');

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
// Happy Path: returns all todos in an array in JSON format (Status 200)
// Sad Path: None
app.get("/todos", function(req, res){
   
});

// View single todo
// Happy Path: returns the requested todo item in JSON format (Status 200)
// Sad Path: the requested todo item does not exist (Status 404)
app.get("/todos/:id", function(req, res){
   
});

// Create a todo
// Happy Path: creates the todo item (Status 201)
// Sad Path: none
app.post("/todos", function(req, res){

});

// Update specific todo
// Happy Path: updates the requested todo item (Status 204)
// Sad Path: the requested todo item does not exist (Status 404)
app.patch("/todos/:id", function(req, res){
    
});

// Delete a todo
// Happy Path: deletes the requested todo item (Status 204)
// Sad Path: the requested todo item does not exist (Status 404)
app.delete("/todos/:id", function(req, res){
    
});

// STOP: Don't change anything below this line

app.listen(PORT, function () {
    console.log("Server started...")
});