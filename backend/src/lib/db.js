import mongoose from 'mongoose';

export async function connectDB() {
    try{
        const mongoUri = process.env.MONGO_URI;

        if(!mongoUri){
            throw new Error("Mongo URI is not defined in environment variables");
        }

        const connection = await mongoose.connect(mongoUri);

        console.log("MongoDB connected successfully", connection.connection.host);

    }catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);

        // 1 means failed, 0 means success
    }
}