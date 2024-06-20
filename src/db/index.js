import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';

const connectDB = async () =>{
        try {
            const DBvar = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log("\n MongoDB connected. Host: ", DBvar.connection.host);
        } catch (error) {
            console.error("MongoDB Connection FAILED ", error);
            process.exit(1)            
        }
    }

export default connectDB