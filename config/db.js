import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connectDb = async () => {
  try {
    const dbConnection = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
    console.log(`\nMongoDb Connected !! HOST: ${dbConnection.connection.host}`);
    
  } catch (err) {
    console.log(err.message);
    process.exit(1)
  }
};

export default connectDb