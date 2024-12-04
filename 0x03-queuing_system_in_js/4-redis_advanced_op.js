import { createClient, print } from 'redis';
const redisClient = createClient();
redisClient.on('connect', function() {
  console.log('Redis client connected to the server');
});
