import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 9000;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`serveer listning ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to Connect", err);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});
