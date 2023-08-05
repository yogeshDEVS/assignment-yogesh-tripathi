# Backend API Project

This project implements a backend system with RESTful APIs for user registration, token generation, data storage, retrieval, updating, and deletion.

## Table of Contents

- [Frameworks and Technologies](#frameworks-and-technologies)
- [Database Schema](#database-schema)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [API Documentation](#api-documentation)


## Frameworks and Technologies

The backend is built using the following technologies:

- Node.js
- Express.js
- Body-parser
- Cors

## Database Schema

The backend interacts with an SQL database. The schema includes the following tables:

- Users: Store user information (username, email, password, full name, age, gender)
- Data: Store key-value pairs

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- Node.js (https://nodejs.org/)
- npm (Node Package Manager)

### Installation

1. Clone this repository: `git clone https://github.com/your-username/backend-project.git`
2. Navigate to the project directory: `cd backend-project`
3. Install dependencies: `npm install`

### Usage

1. Start the server: `npm start`
2. The server will be accessible at: `http://localhost:3003`

## API Documentation

### User Registration

**Endpoint:** `POST /api/register`

Register a new user.

Request Body:
```json
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "secure_password123",
  "full_name": "John Doe",
  "age": 30,
  "gender": "male"
}
## User Registration

**Endpoint:** `POST /api/register`

Register a new user.

Request Body:
```json
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "secure_password123",
  "full_name": "John Doe",
  "age": 30,
  "gender": "male"
}
Success Response:
{
  "status": "success",
  "message": "User successfully registered!",
  "data": {
    "user_id": "12345",
    "username": "example_user",
    "email": "user@example.com",
    "full_name": "John Doe",
    "age": 30,
    "gender": "male"
  }
}
Error Response: 
{
  "status": "error",
  "code": "INVALID_REQUEST",
  "message": "Invalid request. Please provide all required fields: username, email, password, full_name."
}
2. Generate Token
Endpoint: POST /api/token

Generate a new access token.

Request Body:
{
  "username": "example_user",
  "password": "secure_password123"
}
Success Response: 
{
  "status": "success",
  "message": "Access token generated successfully.",
  "data": {
    "access_token": "<TOKEN>",
    "expires_in": 3600
  }
}
Store Data
Endpoint: POST /api/data

Store a key-value pair in the database.

Request Headers:

Authorization: Bearer <ACCESS_TOKEN>

Request Body: Bearer <ACCESS_TOKEN>
Request Body:
{
  "key": "unique_key",
  "value": "data_value"
}
Success Response: 
{
  "status": "success",
  "message": "Data stored successfully."
}
Retrieve Data
Endpoint: GET /api/data/<KEY>

Request Headers:

Authorization: Bearer <ACCESS_TOKEN>
Success Response:
{
  "status": "success",
  "data": {
    "key": "unique_key",
    "value": "data_value"
  }
}
Error Response: 
{
  "status": "error",
  "code": "KEY_NOT_FOUND",
  "message": "The provided key does not exist in the database."
}
Update Data
Endpoint: PUT /api/data/<KEY>

Request Headers:

Authorization: Bearer <ACCESS_TOKEN>
Request Body:
{
  "value": "new_data_value"
}
Success Response:
{
  "status": "success",
  "message": "Data updated successfully."
}
Error Response:
{
  "status": "error",
  "code": "KEY_NOT_FOUND",
  "message": "The provided key does not exist in the database."
}
'Delete Data'
Endpoint: DELETE /api/data/<KEY>

Request Headers:

Authorization: Bearer <ACCESS_TOKEN>
Success Response:
{
  "status": "success",
  "message": "Data deleted successfully."
}
'Error Response': 
{
  "status": "error",
  "code": "KEY_NOT_FOUND",
  "message": "The provided key does not exist in the database."
}

## Contributing

Contributions are welcome! Please read our [Contribution Guidelines](link_to_contributing_guidelines) before submitting a pull request.


## License

This project is licensed under the [MIT License](link_to_license_file).

