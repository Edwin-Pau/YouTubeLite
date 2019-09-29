const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

// Sets up the dirname
app.use(express.static(__dirname));

// Send all routes to index.html which is the React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log(`Server started on port: ${port}`)