// const express = require('express');
// const dotenv = require("dotenv");
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Set up the port
const PORT = process.env.PORT || 3000;

// Create the express app
const app = express();

// Middleware for JSON body parsing
app.use(express.json());

// API call to the root
app.get('/', (req, res) => {
  res.send("Welcome to the First API Call...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});
