import Plate from "./Plate";
import { useEffect, useState } from "react";


function Edit({ showEdit, hideModal, editPlate, removePlate }) {
	const [edit, setEdit] = useState({ left: 0, right: 0, id: 0 });

	useEffect(() => {
		setEdit(showEdit);
	}, [showEdit]);

	const control = (e, side) => {
		const editCopy = { ...edit };
		if ("L" === side) {
			editCopy.left = parseInt(e.target.value);
		} else if ("R" === side) {
			editCopy.right = parseInt(e.target.value);
		}
		setEdit(editCopy);
	};

	if (showEdit.id) {
		return (
			<div className="domino__modal">
				<div className="domino__edit">
					<div className="domino__edit__close" onClick={hideModal}>
						X
					</div>
					<h2>Edit the Plate</h2>
					<div className="domino__edit__domino">
						<Plate plate={edit}></Plate>
					</div>
					<div className="domino__edit__selects">
						<select value={edit.left} onChange={(e) => control(e, "L")}>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
						</select>
						<select value={edit.right} onChange={(e) => control(e, "R")}>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
						</select>
					</div>
					<button className="button green" onClick={() => editPlate(edit)}>
						edit
					</button>
					<button className="button red" onClick={() => removePlate(edit)}>
						remove
					</button>
				</div>
			</div>
		);
	}
	return null;
}

export default Edit;
