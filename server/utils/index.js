import jwt from "jsonwebtoken";

export const generateBoyProfilePic = (username) => {
	return `https://avatar.iran.liara.run/public/boy?username=${username}`;
};

export const generateGirlProfilePic = (username) => {
	return `https://avatar.iran.liara.run/public/girl?username=${username}`;
};

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });
	res.cookie("auth", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
		secure: process.env.NODE_ENV === "development" ? false : true,
		httpOnly: process.env.NODE_ENV === "development" ? false : true,
		sameSite: process.env.NODE_ENV === "development" ? false : "none",
	});
};
