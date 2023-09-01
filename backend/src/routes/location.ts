import axios from "axios";
import { Request, Response, Router } from "express";
import redisClient from "../configs/redis";
import { QueryType } from "../types";

const locationRouter: Router = Router();

locationRouter.get(
  "/",
  async (req: Request<{}, {}, {}, QueryType>, res: Response) => {
    const { query }: QueryType = req.query;

    if (!query) {
      return res.status(400).send({ error: "Location is missing!" });
    }

    const cachedData = await redisClient.get(`location:${query}`);

    if (cachedData) {
      return res.json({ locations: JSON.parse(cachedData), isCache: true });
    }

    const locations = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );

    if (!locations?.data || locations.data.length === 0) {
      return res.status(404).json({ error: "Location not found!" });
    }

    redisClient.set(`location:${query}`, JSON.stringify(locations.data));

    return res.json({ locations: locations.data, isCache: false });
  }
);

export default locationRouter;
