import { useState } from "react";

function Sort({ clientSort, plates, serverSort }) {
	const [sortC, setSortC] = useState("N");
	const [sortS, setSortS] = useState("N");

	const controlS = (e) => {
		setSortS(e.target.value);
		//------------------------------//
		serverSort(e.target.value);
	};

	const controlC = (e) => {
		setSortC(e.target.value);
		//------------------------------//
		let platesCopy = [...plates];
		switch (e.target.value) {
			case "LA":
				platesCopy.sort((a, b) => a.left - b.left);
				break;
			case "LD":
				platesCopy.sort((a, b) => b.left - a.left);
				break;
			case "RA":
				platesCopy.sort((a, b) => a.right - b.right);
				break;
			case "RD":
				platesCopy.sort((a, b) => b.right - a.right);
				break;
			case "BA":
				platesCopy.sort((a, b) => a.left + a.right - b.left - b.right);
				break;
			case "BD":
				platesCopy.sort((a, b) => b.left + b.right - a.left - a.right);
				break;
			default:
		}
		clientSort(platesCopy);
	};

	return (
		<>
			<div className="domino__header__sort">
				<h2>Client SORT</h2>
				<select value={sortC} onChange={controlC}>
					<option value="N">Sort the Plates</option>
					<option value="LA">Left side ASC</option>
					<option value="LD">Left side DESC</option>
					<option value="RA">Right side ASC</option>
					<option value="RD">Right side DESC</option>
					<option value="BA">Both sides ASC</option>
					<option value="BD">Both sides DESC</option>
				</select>
			</div>
			<div className="domino__header__sort">
				<h2>Server SORT</h2>
				<select value={sortS} onChange={controlS}>
					<option value="N">Sort the Plates</option>
					<option value="LA">Left side ASC</option>
					<option value="LD">Left side DESC</option>
					<option value="RA">Right side ASC</option>
					<option value="RD">Right side DESC</option>
					<option value="BA">Both sides ASC</option>
					<option value="BD">Both sides DESC</option>
				</select>
			</div>
		</>
	);
}

export default Sort;
