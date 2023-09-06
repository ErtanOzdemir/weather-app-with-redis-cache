
# Weather App with Redis Cache

This is a Weather App built with Node.js, React, and Redis caching. It allows users to retrieve weather information for a specific location and demonstrates the use of Redis for caching weather data.

## Features

- Retrieve current weather information for a given location.
- Redis caching to improve response times for frequently requested weather data.
- Responsive design for a seamless user experience on desktop and mobile devices.

## Technologies Used

- Redis
- React
- SASS (for styling)
- Node.js
- Express.js
- Axios (for making API requests)
- TypeScript

<img height="32" width="32" src="https://cdn.simpleicons.org/redis/DC382D" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/react/61DAFB" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/sass/CC6699" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/nodedotjs/339933" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/express" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/axios/5A29E4" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/typescript/3178C6" />&nbsp;


## Prerequisites

Before you can run this application, ensure you have the following dependencies installed:

- Node.js (https://nodejs.org/)
- Redis (https://redis.io/)

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ErtanOzdemir/weather-app-with-redis-cache
   cd weather-app-with-redis-cache
   ```

2. Install the backend dependencies and start the Node.js server:

   ```bash
   cd backend
   npm install
   ```

3. Set up your environment variables by creating a `.env.development file in the root of the `backend` folder. Add your variables like this:

    ```bash
    OPEN_WEATHER_API_KEY=your_api_key_here
    PORT=4000
    REDIS_PORT=6379
    REDIS_HOST=localhost
    ```

4. Run the backend.
 
   ```bash
   npm run start:dev
   ```
     

5. In a new terminal, navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

6. Install the frontend dependencies and start the React app:

   ```bash
   npm install
   ```


7. Set up your environment variables by creating a `.env` file in the root of the `frontend` folder. Add your variables like this:

    ```bash
    REACT_APP_API_URL=http://localhost:4000
    ```
8. Run the frontend.
   ```bash
   npm run start
   ```

9. Open your web browser and go to `http://localhost:3000` to access the Weather App.

## Usage

1. Enter the name of a city or location in the search bar.
2. Click on one of the cities shown to retrieve the current weather data for that location.
3. The app will check if the weather data is cached in Redis.
4. If the data is in the cache, it will be displayed immediately. Otherwise, a request will be made to the weather API, and the response will be cached in Redis for future use.

## Redis Caching

This Weather App utilizes Redis caching to improve performance and reduce the load on external weather APIs. When you search for weather data for a location, the app first checks if the data is available in the Redis cache. If found, it is retrieved from Redis, eliminating the need to make an external API request. This caching mechanism helps reduce response times for frequently requested weather data.

## Screenshots

  | Mobile Screenshot | Desktop Screenshot |
| ----------------- | ------------------- |
| ![Mobile Screenshot](https://github.com/ErtanOzdemir/weather-app-with-redis-cache/assets/20026295/943d3c89-cb5e-4174-937b-66adf9f227e9) | ![Desktop Screenshot](https://github.com/ErtanOzdemir/weather-app-with-redis-cache/assets/20026295/89142e4e-3b3f-4304-b263-40555cfe128e) ![Desktop Screenshot](https://github.com/ErtanOzdemir/weather-app-with-redis-cache/assets/20026295/073c943d-4355-44ad-bacd-5ba1cae70431) |


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [OpenWeather](https://openweathermap.org/) for providing the weather data API.
- This project was created as a demonstration of using Redis caching in a Node.js and React application.

