const express = require('express');

const { PORT } = require('./config');

const app = express();

app.use(express.json());

app.use('', require('./routes'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
