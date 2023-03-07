import mongoose from "mongoose";

const connectionDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected to DB"))
    .catch((error) => console.error(error.message));
};

export default connectionDB;
