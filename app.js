const express = require('express'); // Import Express
const app = express();             // Create an Express app

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple GET endpoint
app.get('/', (req, res) => {
    res.send('Welcome to your simple API!');
});

// Define a POST endpoint
app.post('/data', (req, res) => {
    const { name, age } = req.body; // Extract data from request body
    res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
