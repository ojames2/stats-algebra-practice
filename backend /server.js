// 🔐 Load environment variables from .env.attempts
require('dotenv').config({ path: '.env.attempts' });

// 🚀 Import required modules
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// 🛠 Initialize Express app
const app = express();

// 🌐 Enable CORS for GitHub Pages frontend
app.use(cors({
  origin: "https://ojames2.github.io"
}));

// 🧾 Parse incoming JSON payloads
app.use(express.json());

// ✅ Handle preflight OPTIONS requests for CORS
app.options('/track-attempt', cors());

// 🗄️ Set up PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Required for Railway's managed PostgreSQL
});

// 📥 Define route to log user attempts
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

  console.log("Received attempt:", req.body); // 🐛 Debug log

  try {
    await pool.query(
      `INSERT INTO mainpage_attempts (
        topic, level, question_text, user_answer,
        correct_answer, is_correct, source_page, session_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [topic, level, question_text, user_answer, correct_answer, is_correct, source_page, session_id]
    );
    res.status(200).send('Attempt logged successfully');
  } catch (err) {
    console.error(err); // 🐛 Error log
    res.status(500).send('Error logging attempt');
  }
});

// 📡 Start server using dynamic port for Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
