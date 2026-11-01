import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const defaultValue = {
	fullName: "",
	username: "",
	password: "",
	confirmPassword: "",
	gender: "",
};

export default function Signup() {
	const [formData, setFormData] = useState(defaultValue);
	const { signup, loading } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(formData);
	};

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg bg-slate-900 shadow-xl">
				<h1 className="text-3xl font-semibold text-center text-white">
					Sign Up <span className="text-blue-300"> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text !text-slate-100">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="John Doe"
							name="fullName"
							onChange={handleChange}
							value={formData.fullName}
							className="w-full input input-bordered h-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:border-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
						/>
					</div>

					<div>
						<label className="label p-2 ">
							<span className="text-base label-text !text-slate-100">Username</span>
						</label>
						<input
							type="text"
							placeholder="johndoe"
							name="username"
							value={formData.username}
							onChange={handleChange}
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
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter Password"
							className="w-full input input-bordered h-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:border-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text !text-slate-100">Confirm Password</span>
						</label>
						<input
							type="password"
							name="confirmPassword"
							onChange={handleChange}
							value={formData.confirmPassword}
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:border-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
						/>
					</div>

					<GenderCheckbox selectedGender={formData.gender} handleChange={handleChange} />

					<Link
						className="mt-2 inline-block text-base text-slate-100 hover:text-white hover:underline active:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
						to="/login"
					>
						Already have an account?
					</Link>

					<div>
						<button
							disabled={loading}
							type="submit"
							className="btn btn-block btn-sm mt-2 border border-slate-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
						>
							{loading ? (
								<span className="loading loading-spinner"></span>
							) : (
								"Sign Up"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
