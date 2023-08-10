const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000; // Choose the desired port number

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'studentmanagement' // Replace with your MySQL database name
});

// Connect to the MySQL server
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});

// Middleware to parse JSON in the request body
app.use(express.json());
// Define the POST endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query the table to check if the username and password are correct
    const query = 'SELECT * FROM admin WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (error, results) => {
        if (error) {
            console.error('Error querying the database:', error);
            res.sendStatus(500); // Send an error response
        } else {
            if (results.length > 0) {
                res.sendStatus(200); // Send a success response
            } else {
                res.sendStatus(401); // Send an unauthorized response
            }
        }
    });
});
// Define the POST endpoint for student registration
app.post('/register-students', (req, res) => {
    const student = req.body;

    // Insert the student data into the MySQL database
    connection.query('INSERT INTO studentdata SET ?', student, (error, results) => {
        if (error) {
            console.error('Error inserting student data into MySQL:', error);
            res.sendStatus(500); // Send an error response
        } else {
            console.log('Student data inserted into MySQL:', results);
            res.sendStatus(200); // Send a success response
        }
    });
});

// Define the POST endpoint for user registration
app.post('/register-user', (req, res) => {
    const user = req.body;

    // Insert the user data into the MySQL database
    connection.query('INSERT INTO admin SET ?', user, (error, results) => {
        if (error) {
            console.error('Error inserting student data into MySQL:', error);
            res.sendStatus(500); // Send an error response
        } else {
            console.log('Student data inserted into MySQL:', results);
            res.sendStatus(200); // Send a success response
        }
    });
});

// Define the GET endpoint to fetch all students
app.get('/fetch-students', (req, res) => {
    // Fetch all student data from the MySQL database
    connection.query('SELECT * FROM studentdata', (error, results) => {
        if (error) {
            console.error('Error fetching student data from MySQL:', error);
            res.sendStatus(500); // Send an error response
        } else {
            console.log('Fetched student data from MySQL:', results);
            res.send(results); // Send the student data as the response
        }
    });
});

//search by ID;
app.get('/get-student/id/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM studentdata WHERE Sid = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error retrieving student details:', error);
            res.status(500).send('Error retrieving student details');
        } else {
            res.json(results);
        }
    });
});


//search by fname;
app.get('/get-student/fname/:name', (req, res) => {
    const fname = req.params.name;
    const query = 'SELECT * FROM studentdata WHERE firstname = ?';
    connection.query(query, [fname], (error, results) => {
        if (error) {
            console.error('Error retrieving student details:', error);
            res.status(500).send('Error retrieving student details');
        } else {
            res.json(results);
        }
    });
});

//search by lname;
app.get('/get-student/lname/:name', (req, res) => {
    const lname = req.params.name;
    const query = 'SELECT * FROM studentdata WHERE lastname = ?';
    connection.query(query, [lname], (error, results) => {
        if (error) {
            console.error('Error retrieving student details:', error);
            res.status(500).send('Error retrieving student details');
        } else {
            res.json(results);
        }
    });
});

//search by city;
app.get('/get-student/city/:city', (req, res) => {
    const city = req.params.city;
    const query = 'SELECT * FROM studentdata WHERE city = ?';
    connection.query(query, [city], (error, results) => {
        if (error) {
            console.error('Error retrieving student details:', error);
            res.status(500).send('Error retrieving student details');
        } else {
            res.json(results);
        }
    });
});

//search by Guardian;
app.get('/get-student/guardian/:guardian', (req, res) => {
    const guardian = req.params.guardian;
    const query = 'SELECT * FROM studentdata WHERE guardian = ?';
    connection.query(query, [guardian], (error, results) => {
        if (error) {
            console.error('Error retrieving student details:', error);
            res.status(500).send('Error retrieving student details');
        } else {
            res.json(results);
        }
    });
});

//search by course;
app.get('/get-student/course/:course', (req, res) => {
    const course = req.params.course;
    const query = 'SELECT * FROM studentdata WHERE course = ?';
    connection.query(query, [course], (error, results) => {
        if (error) {
            console.error('Error retrieving student details:', error);
            res.status(500).send('Error retrieving student details');
        } else {
            res.json(results);
        }
    });
});


// Delete student by ID
app.delete('/delete-student/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM studentdata WHERE Sid = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error deleting student record:', error);
            res.status(500).send('Error deleting student record');
        } else {
            res.sendStatus(200);
        }
    });
});

// Update student by ID
app.put('/update-student-by-id/:id', (req, res) => {
    const id = req.params.id;
    const updatedStudent = req.body;
    const query = 'UPDATE studentdata SET ? WHERE Sid = ?';
    connection.query(query, [updatedStudent, id], (error, results) => {
        if (error) {
            console.error('Error updating student record:', error);
            res.status(500).send('Error updating student record');
        } else {
            res.sendStatus(200);
        }
    });
});

// Update student by first name
app.put('/update-student-by-first-name/:name', (req, res) => {
    const name = req.params.name;
    const updatedStudent = req.body;
    const query = 'UPDATE studentdata SET ? WHERE firstname = ?';
    connection.query(query, [updatedStudent, name], (error, results) => {
        if (error) {
            console.error('Error updating student details:', error);
            res.status(500).send('Error updating student details');
        } else {
            res.sendStatus(200);
        }
    });
});






// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
const server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
