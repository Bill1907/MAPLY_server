const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const playlistRouter = require('./routes/playlist');

require('dotenv').config()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('혜원아 취업하게 기도해주라 제발...ㅠㅠ')
})

app.use('/user', userRouter);
app.use('/playlist', playlistRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})