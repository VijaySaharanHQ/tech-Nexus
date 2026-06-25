// backend/server.js

const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// Initialize the Express App
const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// Middleware
// ==========================================
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Allow server to accept JSON data
const mongoose = require('mongoose');

// ==========================================
// Database Connection
// ==========================================
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('📦 MongoDB Connected Successfully!'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ==========================================
// Static File Serving (The Frontend)
// ==========================================
// This tells Express to serve all files from your 'frontend' folder
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// ==========================================
// API Routes (The Engine)
// ==========================================
// A simple test route to ensure the API is working
app.get('/api/status', (req, res) => {
    res.json({ status: 'success', message: '🚀 Tech Nexus API is running smoothly!' });
});

// ==========================================
// Fallback Route
// ==========================================
// If a user goes to a route that doesn't exist, send them back to the home page
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// ==========================================
// Start the Server
// ==========================================
app.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(`🚀 Tech Nexus Server is LIVE`);
    console.log(`🌐 Frontend accessible at: http://localhost:${PORT}`);
    console.log(`========================================\n`);
});
