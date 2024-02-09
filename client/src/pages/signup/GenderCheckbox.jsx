export default function GenderCheckbox({ selectedGender, handleChange }) {
	return (
		<div className="flex">
			<div className="form-control">
				<label className={`label gap-2 cursor-pointer`}>
					<span className="label-text">Male</span>
					<input
						type="radio"
						value="male"
						checked={selectedGender === "male"}
						onChange={handleChange}
						name="gender"
						className="checkbox border-slate-900"
					/>
				</label>
			</div>
			<div className="form-control">
				<label className={`label gap-2 cursor-pointer`}>
					<span className="label-text">Female</span>
					<input
						type="radio"
						value="female"
						checked={selectedGender === "female"}
						onChange={handleChange}
						name="gender"
						className="checkbox border-slate-900"
					/>
				</label>
			</div>
		</div>
	);
}
