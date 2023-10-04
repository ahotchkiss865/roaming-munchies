const express = require('express');
const { Pool } = require('pg');

const app = express();

// Create a PostgreSQL database connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'roamingmunchies',
  password: 'postgres',
  port: 5432,
});

// Middleware to parse JSON requests
app.use(express.json());

// Define a route to interact with the database
app.get('/api/data', (req, res) => {
  // Example SQL query to retrieve data from a 'your_table' table
  const query = 'SELECT * FROM your_table';

  // Use the database connection pool to execute the query
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results.rows); // Send the query results as JSON response
    }
  });
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});