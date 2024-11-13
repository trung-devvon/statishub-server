require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { checkDatabaseConnection } = require('./config/database');
const initRoutes = require('./routes')

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: process.env.CLIENT_URL,
      methods: ["POST", "PUT", "DELETE", "GET"],
    })
  );
initRoutes(app)



checkDatabaseConnection();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3308;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});