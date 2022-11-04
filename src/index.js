const express = require('express');
const httpRequestLog = require('./middleware/log');

/* */
const app = express();
const port = 8001;

app.use(express.static('static'));

app.use(httpRequestLog);

app.get('/', (req, res) => {
  return res.status(200).send({ data: {} });
});

/* Start the express server */
app.listen(port, () => {
  try {
    console.log(`Example app listening at http://localhost:${port}`);
  } catch (err) {
    console.log(`Something bad happend on server`, err);
  }
});
