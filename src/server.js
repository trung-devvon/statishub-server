const express = require('express');
const cors = require('cors');
const { checkDatabaseConnection } = require('./config/database');
const initRoutes = require('./routes')



if (process.env.NODE_ENV === 'production') {
  require('dotenv').config(); // Load .env
} else {
  require('dotenv').config({ path: '.env.local' }); // Load .env.local
}
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