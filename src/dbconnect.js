import { config } from 'dotenv';
import mongoose from 'mongoose';

const connectdb = async () => {
    // Import environment variables from .env
    config();

    await mongoose
        .connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => { 
            console.log('Connected to MongoDb')
        })
        .catch((err) => {
            console.log(err);
        })
}

export default connectdb;