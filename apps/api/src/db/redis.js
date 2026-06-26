import { createClient} from 'redis';

const redisClient = createClient({url: process.env.REDIS_URL});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

try{
    await redisClient.connect();
    console.log('Connected to Redis');
}catch(error){
    console.error('Error connecting to Redis:', error.message);
    process.exit(1); // Exit the process if Redis connection fails
}

export default redisClient;