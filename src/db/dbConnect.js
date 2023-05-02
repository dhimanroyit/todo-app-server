import mongoose from 'mongoose';
import config from '../config/index.js';

// database connect function
const dbConnect = async () => {
  const URL = `${config.databaseUrl}`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('database connect successfully');
  } catch (e) {
    console.error(e);
  }
};
export default dbConnect;
