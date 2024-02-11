import mongoose from "mongoose";

export const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.info("Connected to MongoDB");
	} catch (error) {
		throw new Error(`Mongodb connection failed, ${error.message}`);
	}
};

export default connectToMongoDB;
