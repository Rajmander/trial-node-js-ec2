import mongoose from "mongoose";

const connectDb = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1/replicanew");
    console.log("connection success");
  } catch (err) {
    console.log("Error while connection");
  }
};

export default connectDb;
