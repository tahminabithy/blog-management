import mongoose from 'mongoose';
import app from './app';
import config from './config';
const port = 3000;

const runServer = async () => {
  try {
    mongoose.connect(config.mongoUri as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

runServer();
