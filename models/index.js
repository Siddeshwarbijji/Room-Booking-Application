'use strict';
const express = require('express');
const app = express();
const db = require('./models'); // Update the path to the models directory if needed

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
