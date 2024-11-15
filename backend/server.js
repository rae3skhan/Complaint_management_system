const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/complaint-management');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

app.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword, role });
  await user.save();
  res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', { email, password });
  const user = await User.findOne({ email });
  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('User found:', user);
    console.log('Password valid:', isPasswordValid);
    if (isPasswordValid) {
      res.status(200).json({ email: user.email, role: user.role });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } else {
    console.log('User not found');
    res.status(401).send('Invalid credentials');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});