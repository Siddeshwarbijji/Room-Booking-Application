'use strict';
const express = require('express');
const app = express();
const db = require('./models'); // Assuming the models are in the same directory as the index.js file

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Sync the database models and start the server
db.sequelize.sync().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error('Database synchronization failed:', err);
});
