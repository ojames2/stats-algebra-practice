require('dotenv').config({ path: '.env.attempts' });
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.post('/track-attempt', async (req, res) => {
  const {
    topic,
    level,
    question_text,
    user_answer,
    correct_answer,
    is_correct,
    source_page,
    session_id
  } = req.body;

console.log("Received attempt:", req.body);
  
  try {
    await pool.query(
      `INSERT INTO mainpage_attempts 
       (topic, level, question_text, user_answer, correct_answer, is_correct, source_page, session_id) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [topic, level, question_text, user_answer, correct_answer, is_correct, source_page, session_id]
    );
    res.status(200).send('Attempt logged successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging attempt');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
