import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
	const { loading, login } = useLogin();
	const [formData, setFormData] = useState({ username: "", password: "" });

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(formData);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="p-6 shadow-xl h-full w-full bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
				<h1 className="text-3xl font-semibold text-center text-white">
					Login
					<span className="text-blue-800"> ChatVerse</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							name="username"
							onChange={handleChange}
							value={formData.username}
							placeholder="Enter username"
							className="w-full input input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							name="password"
							onChange={handleChange}
							value={formData.password}
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
						/>
					</div>
					<Link
						to="/signup"
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className="btn btn-block btn-sm mt-2">
							{loading ? <span className="loading loading-spinner"></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
