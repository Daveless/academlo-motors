const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/users.routes');
const repairsRouter = require('./routes/repairs.routes');
const authRouter = require('./routes/auth.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairsRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;
