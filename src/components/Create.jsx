import { useState } from "react";
import Plate from "./Plate";

function Create({ createPlate }) {
	const [create, setCreate] = useState({ left: 0, right: 0 });

	const control = (e, side) => {
		const createCopy = { ...create };
		if ("L" === side) {
			createCopy.left = parseInt(e.target.value);
		} else if ("R" === side) {
			createCopy.right = parseInt(e.target.value);
		}
		setCreate(createCopy);
	};

	const wrapCreatePlate = () => {
		createPlate({ ...create });
		setCreate({ left: 0, right: 0 });
	};

	return (
		<div className="domino__create">
			<h2>Create new Plate</h2>
			<div className="domino__create__domino">
				<Plate plate={create}></Plate>
			</div>
			<div className="domino__create__selects">
				<select value={create.left} onChange={(e) => control(e, "L")}>
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
				<select value={create.right} onChange={(e) => control(e, "R")}>
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
			</div>
			<button className="button green" onClick={wrapCreatePlate}>
				Create
			</button>
		</div>
	);
}

export default Create;
