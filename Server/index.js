const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'mobile.db');
let db = null;

const initialize = async () => {
  try {
    db = await open({ filename: dbPath, driver: sqlite3.Database });

    await db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      mobile_number TEXT,
      otp TEXT,
      is_verified INTEGER DEFAULT 0
    )`);

    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  } catch (error) {
    console.error(`Error initializing the database: ${error}`);
    process.exit(1);
  }
};

initialize();

const generateOTP = () => {
  return Math.floor(Math.random() * 9000).toString().padStart(4, '0');
};

app.post('/mobile', async (req, res) => {
  const { mobileNumber } = req.body;
  const otp = generateOTP();

  try {
    await db.run('INSERT INTO users (mobile_number, otp) VALUES (?, ?)', [
      mobileNumber,
      otp,
    ]);
    console.log(`OTP for ${mobileNumber}: ${otp}`);
    res.status(200).json({ message: 'OTP sent successfully', otp });
  
  } catch (error) {
    console.error(`Error inserting into the database: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.put('/otp', async (req, res) => {
    const { mobileNumber, otp } = req.body;
    console.log(mobileNumber, otp);
  
    try {
      const row = await db.get('SELECT * FROM users WHERE mobile_number = ? AND otp = ?', [mobileNumber, otp]);
  
      if (!row) {
        res.status(401).json({ error: 'OTP Verification Failed' });
      } else {
        await db.run('UPDATE users SET is_verified = 1 WHERE mobile_number = ? AND otp = ?', [mobileNumber, otp]);
        res.status(200).json({ message: 'OTP Verified Successfully' });
        console.log("successfully updated");
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  