// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5052;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
