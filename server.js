#!/usr/bin/env node

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
import { handler as emailHandler } from './api/send-email.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for development
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
});

// Serve static files
app.use(express.static(__dirname));

// Email API endpoint
app.post('/api/send-email', (req, res) => {
    console.log('Received email request with body:', JSON.stringify(req.body, null, 2));
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Request body type:', typeof req.body);
    console.log('Body keys:', Object.keys(req.body));
    return emailHandler(req, res);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        success: false,
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Environment:', {
        NODE_ENV: process.env.NODE_ENV,
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID ? 'Set' : 'Not Set',
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID ? 'Set' : 'Not Set',
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY ? 'Set' : 'Not Set'
    });
});

// Handle server errors
server.on('error', (error) => {
    console.error('Server error:', error);
}); 