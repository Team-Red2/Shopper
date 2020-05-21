// This is the Web Server

const express = require('express');
const server = express();

const morgan = require('morgan');
server.use(morgan('dev'));

const path = require('path');
server.use(express.static(path.join(__dirname, 'build')));

server.use('/api', require('./routes'));

const { client } = require('./db');

const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  console.log(`Server is running on ${ PORT }!`);

  try {
    await client.connect();
    console.log('Database is open for business!');
  } catch (error) {
    console.error("Database is closed for repairs!\n", error);
  }
});