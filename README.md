# School Management APIs

This project implements Node.js APIs for managing school data using Express.js and MySQL.

## Features

- Add new schools with location data
- List schools sorted by proximity to user location

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` file
4. Run the database schema in your MySQL database
5. Start the server: `npm start`

## Environment Variables

Create a `.env` file with:

```
DB_HOST=your-cloud-mysql-host
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=school_management
DB_PORT=3306
DB_SSL=true
```

## Database Schema

Run the `schema.sql` file in your MySQL database to create the schools table.

## APIs

### Add School

- **Endpoint:** POST /addSchool
- **Body:**
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.345,
    "longitude": 67.890
  }
  ```
- **Response:** 201 Created with school ID

### List Schools

- **Endpoint:** GET /listSchools?latitude=12.345&longitude=67.890
- **Response:** Array of schools sorted by distance

## Deployment

Deployed on Railway. Live endpoints: [Add your deployed URL]

## Postman Collection

Import the `SchoolManagement.postman_collection.json` file into Postman.