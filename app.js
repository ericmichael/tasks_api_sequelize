let express = require('express')
let cors = require('cors')
let app = express()
const Sequelize = require('sequelize');

// instantiate the library for use, connecting to the sqlite database file
let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'tasks.sqlite'
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

// uncomment this when you have created the task model
// const Task = sequelize.import("./models/tasks.js");

// View all tasks
// Happy Path: returns all tasks in an array in JSON format (Status 200)
// Sad Path: None
app.get("/tasks", function(req, res){
   
});

// View single task
// Happy Path: returns the requested task item in JSON format (Status 200)
// Sad Path: the requested task item does not exist (Status 404)
app.get("/tasks/:id", function(req, res){
   
});

// Create a task
// Happy Path: creates the task item (Status 201)
// Sad Path: none
app.post("/tasks", function(req, res){

});

// Update specific task
// Happy Path: updates the requested task item (Status 204)
// Sad Path: the requested task item does not exist (Status 404)
app.patch("/tasks/:id", function(req, res){
    
});

// Delete a task
// Happy Path: deletes the requested task item (Status 204)
// Sad Path: the requested task item does not exist (Status 404)
app.delete("/tasks/:id", function(req, res){
    
});

// Add you own ability to mark a task as complete
// Happy Path: marks the task item as complete (Status 204)
// Sad Path: None

// Add you own ability to mark a task as incomplete
// Happy Path: marks the task item as incomplete (Status 204)
// Sad Path: None

// STOP: Don't change anything below this line

app.listen(PORT, function () {
    console.log("Server started...")
});