// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 2000;

const app = express();
app.use(cors({
  origin: ["https://bajaj-kappa-gilt.vercel.app"],
  methods: ["GET","POST"],
  credentials: true
}));
app.use(express.json());

const userId = "Akshat_S_Somvanshi"; 
const email = "akshatsomvanshi18@gmail.com"; 
const rollNumber = "21BIT0004"; 

app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];
  const numbers = [];
  const alphabets = [];
  let highestLowercase = '';

  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item);
      if (item >= 'a' && item <= 'z' && item > highestLowercase) {
        highestLowercase = item;
      }
    }
  });

  res.json({
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
  });
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
