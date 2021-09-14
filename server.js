const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const root = path.join(__dirname, 'assets', 'bundles');
app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

app.listen(PORT);

console.log(`Listening on port ${PORT}`);
