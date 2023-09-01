import { createClient } from "redis";

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST as string,
    port: Number(process.env.REDIS_PORT),
  },
});

redisClient.on("error", () => console.log("Redis Client Error!"));

export default redisClient;
