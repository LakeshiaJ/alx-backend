import { createClient, print } from "redis";
const client = createClient();
client.on("connect", () => {
  console.log(`Redis client connected to the server`);
});
