import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

export const redis = new Redis("rediss://default:AZxrAAIncDIzYmFhY2IxMDJlZWY0MWI4OWFiZmEzOWRjZTI5NDU1ZHAyNDAwNDM@proven-hookworm-40043.upstash.io:6379");
// await redis.set('foo', 'bar');