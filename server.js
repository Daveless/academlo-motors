require('.env').config();
const app = require('./app');
const { db } = require('./src/database/config');

db.authenticate()
  .then(() => console.log('database authenticated'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('synced database'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
