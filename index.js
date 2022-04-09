const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.get('/', (req, res) => {
  res.send('server is here');
});

app.get('/cards', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'cards.json'), (err, content) => {
    if (err) {
      throw err;
    } else {
      res.end(content);
    }
  });
});

app.post('/user', bodyParser.json(), (req, res) => {
  const user = req.body;
  console.log(req.body);
  fs.writeFile(path.join(__dirname, 'data', 'user.json'), JSON.stringify(user), (err) => {
    if (err) {
      throw err;
    } else {
      res.end();
    }
  });
});

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
