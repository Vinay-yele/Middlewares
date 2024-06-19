const request = require('supertest');   //supertest is a library used for testing HTTP servers. It allows you to make HTTP requests and assertions about the responses
const assert = require('assert');   //assert is a Node.js built-in module for making assertions. It is used for writing test cases by checking if certain conditions are true
const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable
// Global middleware to count the number of requests
app.use((req, res, next) => {
  requestCount++;
  next();
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;