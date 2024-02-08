import { Schema, model } from "mongoose";

const userSchema = new Schema({
	fullName: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		minLength: 6,
		required: true,
		select: false,
	},
	profilePic: String,
	gender: {
		type: String,
		enum: ["male", "female"],
		required: true,
	},
});

const User = model("User", userSchema);

export default User;
