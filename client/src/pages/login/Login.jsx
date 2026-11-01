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
			<div className="p-6 shadow-xl h-full w-full rounded-md bg-slate-900">
				<h1 className="text-3xl font-semibold text-center text-white">
					Login
					<span className="text-blue-800"> ChatVerse</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text !text-slate-100">Username</span>
						</label>
						<input
							type="text"
							name="username"
							onChange={handleChange}
							value={formData.username}
							placeholder="Enter username"
							className="w-full input input-bordered h-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:border-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
						/>
					</div>
					<div>
						<label className="label">
							<span className="text-base label-text !text-slate-100">Password</span>
						</label>
						<input
							type="password"
							name="password"
							onChange={handleChange}
							value={formData.password}
							placeholder="Enter Password"
							className="w-full input input-bordered h-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:border-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
						/>
					</div>
					<Link
						to="/signup"
						className="mt-2 inline-block text-base text-slate-100 hover:text-white hover:underline active:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className="btn btn-block btn-sm mt-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">
							{loading ? <span className="loading loading-spinner"></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
