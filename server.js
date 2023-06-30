const app = require('./app');
const mongoose = require('mongoose');

const { DB_HOST, PORT, SECRET_KEY = 3000 } = process.env;
mongoose.set('strictQuery', false);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log('Database connection successful!');
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
