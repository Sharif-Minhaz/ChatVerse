export default function GenderCheckbox({ selectedGender, handleChange }) {
	return (
		<div className="flex">
			<div className="form-control">
				<label className={`label gap-2 cursor-pointer`}>
					<span className="label-text !text-slate-100">Male</span>
					<input
						type="radio"
						value="male"
						checked={selectedGender === "male"}
						onChange={handleChange}
						name="gender"
						className="checkbox border-slate-900 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					/>
				</label>
			</div>
			<div className="form-control">
				<label className={`label gap-2 cursor-pointer`}>
					<span className="label-text !text-slate-100">Female</span>
					<input
						type="radio"
						value="female"
						checked={selectedGender === "female"}
						onChange={handleChange}
						name="gender"
						className="checkbox border-slate-900 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					/>
				</label>
			</div>
		</div>
	);
}
