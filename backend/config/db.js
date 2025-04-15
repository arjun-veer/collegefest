import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log("DB Connnected")
    } catch (error) {
        console.log("Database Connection has been failed", error)
        process.exit(1);
    }
}