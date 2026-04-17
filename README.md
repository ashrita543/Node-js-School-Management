# School Management APIs

This project implements Node.js APIs for managing school data using Express.js and PostgreSQL.

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

Railway automatically provides `DATABASE_URL` for PostgreSQL. No manual setup needed.

## Database Schema

Railway will create the PostgreSQL database automatically. Run the `schema.sql` in Railway's database console.

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