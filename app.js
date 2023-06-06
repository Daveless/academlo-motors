const cors = require('cors');
const express = require('express');

const userRouter = require('./src/routes/users.routes');
const repairsRouter = require('./src/routes/repairs.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairsRouter);

module.exports = app;
