const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// User Registration API
app.post('/api/register', (req, res) => {
    const { username, email, password, full_name, age, gender } = req.body;

    // Check if required fields are provided
    if (!username || !email || !password || !full_name) {
        return res.status(400).json({
            status: 'error',
            code: 'INVALID_REQUEST',
            message: 'Invalid request. Please provide all required fields: username, email, password, full_name.',
        });
    }

    // Implement user registration logic here
    // For example, you might create a new user in your database

    // Assuming registration is successful, send a success response
    return res.status(200).json({
        status: 'success',
        message: 'User successfully registered!',
        data: {
            user_id: '12345',
            username,
            email,
            full_name,
            age,
            gender,
        },
    });
});

// Generate Token API
app.post('/api/token', (req, res) => {
    const { username, password } = req.body;

    // Check if required fields are provided
    if (!username || !password) {
        return res.status(400).json({
            status: 'error',
            code: 'MISSING_FIELDS',
            message: 'Invalid request. Please provide both username and password.',
        });
    }

    // Implement token generation logic here
    // Generate and return access token

    return res.status(200).json({
        status: 'success',
        message: 'Access token generated successfully.',
        data: {
            access_token: '<TOKEN>',
            expires_in: 3600,
        },
    });
});

// Store Data API
app.post('/api/data', (req, res) => {
    const { key, value } = req.body;

    // Check if required fields are provided
    if (!key || !value) {
        return res.status(400).json({
            status: 'error',
            code: 'INVALID_REQUEST',
            message: 'Invalid request. Please provide both key and value.',
        });
    }

    // Implement data storage logic here
    // Store the key-value pair in the database

    return res.status(200).json({
        status: 'success',
        message: 'Data stored successfully.',
    });
});

// Retrieve Data API
app.get('/api/data/:key', (req, res) => {
    const { key } = req.params;

    // Implement data retrieval logic here
    // Retrieve the value associated with the provided key from the database

    return res.status(200).json({
        status: 'success',
        data: {
            key: key,
            value: 'data_value', // Replace with actual retrieved value
        },
    });
});

// Update Data API
app.put('/api/data/:key', (req, res) => {
    const { key } = req.params;
    const { value } = req.body;

    // Check if required fields are provided
    if (!value) {
        return res.status(400).json({
            status: 'error',
            code: 'INVALID_REQUEST',
            message: 'Invalid request. Please provide the updated value.',
        });
    }

    // Implement data update logic here
    // Update the value associated with the provided key in the database

    return res.status(200).json({
        status: 'success',
        message: 'Data updated successfully.',
    });
});

// Delete Data API
app.delete('/api/data/:key', (req, res) => {
    const { key } = req.params;

    // Implement data deletion logic here
    // Delete the key-value pair associated with the provided key from the database

    return res.status(200).json({
        status: 'success',
        message: 'Data deleted successfully.',
    });
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
