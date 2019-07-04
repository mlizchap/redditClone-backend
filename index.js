const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('WELCOME'))

const PORT = process.env.PORT || '8080';
app.listen(PORT, () => console.log(`running on port ${PORT}`));