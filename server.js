const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('WORKING ✅');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

setInterval(() => {
  console.log("App is alive...");
}, 10000);