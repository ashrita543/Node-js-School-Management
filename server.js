const express = require('express');
const { Pool } = require('pg');
const Joi = require('joi');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

// Validation schema
const schoolSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

// Add School
app.post('/addSchool', async (req, res) => {
  try {
    const { error, value } = schoolSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { name, address, latitude, longitude } = value;

    const result = await pool.query(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, address, latitude, longitude]
    );

    res.json({ message: 'School added', id: result.rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// List Schools
app.get('/listSchools', async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    const result = await pool.query('SELECT * FROM schools');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});