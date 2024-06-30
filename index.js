const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const axios = require('axios');

const app = express();
const port = 3000;

// PostgreSQL connection details
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hodlinfo',
    password: '12345',
    port: 5432,
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Fetch data from API and store in database
app.get('/fetch-data', async (req, res) => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const tickers = Object.values(response.data).slice(0, 10);

        await pool.query('DELETE FROM tickers'); // Clear existing data

        const insertQuery = `
            INSERT INTO tickers (name, last, buy, sell, volume, base_unit)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;

        for (const ticker of tickers) {
            const { name, last, buy, sell, volume, base_unit } = ticker;
            await pool.query(insertQuery, [name, last, buy, sell, volume, base_unit]);
        }

        res.send('Data fetched and stored in the database');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

// Get stored data from database
app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tickers');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
