const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const authenticateJWT = require('./middleware/authMiddleware');
const checkRole = require('./middleware/roleMiddleware');

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

// Protected routes based on roles
app.get('/api/admin', authenticateJWT, checkRole('Admin'), (req, res) => {
    res.json({ message: 'Welcome Admin' });
});

app.get('/api/user', authenticateJWT, (req, res) => {
    res.json({ message: 'Welcome User' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
