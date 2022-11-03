const express = require('express');

/* */
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.status(200).send({ data: {} });
});

/* Start the express server */
app.listen(port, () => {
  try {
    console.log(`Example app listening at http://localhost:${port}`);
  } catch (err) {
    console.log(`Something bad happend on server`, err);
  }
});
