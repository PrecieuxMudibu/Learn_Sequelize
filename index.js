const express = require("express");
const app = express();
const port = 3000;

// Import the database connection file.
const db = require("./config/database");

// Import the Book model.
const BookModel = require("./models/Book");


// Create an anonymous function to establish the database connection.
// After the connection is established, start the server.

const initApp = async () => {
    console.log("Testing the database connection..");
 
    // Test the connection.
    try {
       await db.authenticate();
       console.log("Connection has been established successfully.");
       /**
        * Start the web server on the specified port.
        */
 
       app.listen(port, () => {
          console.log(`Server is running at: http://localhost:${port}`);
       });
    } catch (error) {
       console.error("Unable to connect to the database:", error.original);
    }
 };
 
 /**
  * Initialize the application.
  */
 initApp();
//  db.close();

// app.get("/", (req, res) => {
//    res.send("Hello World!");
// });

// app.listen(port, () => {
//    console.log(`Example app listening on port ${port}`);
// });
