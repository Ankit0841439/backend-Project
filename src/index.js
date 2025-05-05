import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import express from "express";
const app = express();
import { connectDB } from "./db/index.js";

connectDB()
  .then(
    () =>
      app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;
      }),
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("DB Connected succesfully");
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// })();
