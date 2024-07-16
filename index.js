import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './db.js';
import authRoutes from './routes/auth.js';
import resumeRoutes from './routes/resume.js';
import cors from 'cors';
const app = express();

// Enable CORS
app.use(cors());
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
