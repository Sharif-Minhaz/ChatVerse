import jwt from "jsonwebtoken";

const generateProfilePic = (username, topVariants) => {
	const seed = String(username ?? "");
	const variantIndex =
		[...seed].reduce((hash, character) => hash + character.codePointAt(0), 0) % topVariants.length;
	const avatarUrl = new URL("https://api.dicebear.com/10.x/avataaars/svg");
	avatarUrl.searchParams.set("seed", seed);
	avatarUrl.searchParams.set("topVariant", topVariants[variantIndex]);
	avatarUrl.searchParams.set("topProbability", "100");
	avatarUrl.searchParams.set("facialHairProbability", "0");

	return avatarUrl.toString();
};

export const generateBoyProfilePic = (username) => {
	return generateProfilePic(
		username,
		[
			"shortCurly",
			"shortFlat",
			"shortRound",
			"shortWaved",
			"sides",
			"theCaesar",
			"theCaesarAndSidePart",
		]
	);
};

export const generateGirlProfilePic = (username) => {
	return generateProfilePic(
		username,
		[
			"bigHair",
			"bob",
			"bun",
			"curly",
			"curvy",
			"dreads",
			"dreads01",
			"dreads02",
			"frida",
			"frizzle",
			"fro",
			"froBand",
			"longButNotTooLong",
			"miaWallace",
			"straight01",
			"straight02",
			"straightAndStrand",
		]
	);
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
