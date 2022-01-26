// Connect to DB
const { Client } = require("pg");
const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/GraceShopper`;
const client = new Client(DB_URL);

module.exports = client;
