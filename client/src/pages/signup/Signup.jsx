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
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-white">
					Sign Up <span className="text-blue-300"> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="John Doe"
							name="fullName"
							onChange={handleChange}
							value={formData.fullName}
							className="w-full input input-bordered h-10"
						/>
					</div>

					<div>
						<label className="label p-2 ">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							placeholder="johndoe"
							name="username"
							value={formData.username}
							onChange={handleChange}
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
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text">Confirm Password</span>
						</label>
						<input
							type="password"
							name="confirmPassword"
							onChange={handleChange}
							value={formData.confirmPassword}
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10"
						/>
					</div>

					<GenderCheckbox selectedGender={formData.gender} handleChange={handleChange} />

					<Link
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
						to="/login"
					>
						Already have an account?
					</Link>

					<div>
						<button
							disabled={loading}
							type="submit"
							className="btn btn-block btn-sm mt-2 border border-slate-700"
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
