import mongoose from 'mongoose';


export const connectDB = async()=>{
    try {
        const db_connect = await mongoose.connect(process.env.db_url);
        console.log(`mongodb connected ${db_connect.connection.host}`)
    } catch (error) {
        console.error(`mongodb not connected`)
        console.error(error.message);
        process.exit(1)
    }
};