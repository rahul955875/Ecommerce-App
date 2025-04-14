import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("connectd to mongoDB " + conn.connection.host.bgMagenta.white);
  } catch (error) {
    console.log("Error in mongoDB", error);
  }
};

export default connectDB