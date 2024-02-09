export default function Login() {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="p-6 shadow-xl h-full w-full bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
				<h1 className="text-3xl font-semibold text-center text-white">
					Login
					<span className="text-blue-800"> ChatVerse</span>
				</h1>
				<form>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
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
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
						/>
					</div>
					<a
						href="#"
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
					>
						{"Don't"} have an account?
					</a>

					<div>
						<button className="btn btn-block btn-sm mt-2">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
}
