import express from "express";
import weatherRouter from "./routes/weather";
import redisClient from "./configs/redis";
import "dotenv/config";
import locationRouter from "./routes/location";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/weather", weatherRouter);
app.use("/location", locationRouter);

app.listen(process.env.PORT, () => {
  redisClient.connect();
  return console.log(`App working on Port: ${process.env.PORT}`);
});
