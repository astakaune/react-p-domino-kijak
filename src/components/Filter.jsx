import { useState } from "react";

function Filter({ clientFilter, serverFilter, plates }) {
	const [filterC, setFilterC] = useState("N");
	const [filterS, setFilterS] = useState("N");

	const controlS = (e) => {
		setFilterS(e.target.value);
		serverFilter(e.target.value);
	};

	const controlC = (e) => {
		setFilterC(e.target.value);
		//------------------------------//
		let platesCopy = [...plates];
		switch (e.target.value) {
			case "SS":
				platesCopy = platesCopy.filter((p) => p.left === p.right);
				break;
			case "ES":
				platesCopy = platesCopy.filter((p) => !(p.left * p.right));
				break;
			default:
		}
		clientFilter(platesCopy);
	};

	return (
		<>
			<div className="domino__header__sort">
				<h2>Client Filter</h2>
				<select value={filterC} onChange={controlC}>
					<option value="N">Filter the Plates</option>
					<option value="SS">Same sides</option>
					<option value="ES">With empty side</option>
				</select>
			</div>
			<div className="domino__header__sort">
				<h2>Server Filter</h2>
				<select value={filterS} onChange={controlS}>
					<option value="N">Filter the Plates</option>
					<option value="SS">Same sides</option>
					<option value="ES">With empty side</option>
				</select>
			</div>
		</>
	);
}

export default Filter;
