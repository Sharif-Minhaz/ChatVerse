import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import {
	generateBoyProfilePic,
	generateGirlProfilePic,
	generateTokenAndSetCookie,
} from "./../utils/index.js";

export const signupController = async (req, res) => {
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({
				error: "Password doesn't match",
			});
		}

		const user = await User.exists({ username });

		if (user) {
			return res.status(400).json({
				error: "User already exists",
			});
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await User.create({
			fullName,
			username,
			gender,
			password: hashedPassword,
			profilePic:
				gender === "male"
					? generateBoyProfilePic(username)
					: generateGirlProfilePic(username),
		});

		if (newUser) {
			generateTokenAndSetCookie(newUser._id, res);
			return res.status(201).json({ ...newUser._doc, password: undefined });
		}

		res.status(400).json({ error: "Invalid field data" });
	} catch (err) {
		console.error(`Error in signup controller, ${err.message}`);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const loginController = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username }).select(
			"_id fullName profilePic username +password"
		);
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.error("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logoutController = (_, res) => {
	try {
		res.cookie("auth", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.error("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
