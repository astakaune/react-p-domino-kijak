import Half from "./Half";

function Plate({ plate, showModal }) {
	if (showModal) {
		return (
			<div className="plate" onClick={() => showModal(plate)}>
				<div className="left-half">
					<Half dots={plate.left}></Half>
				</div>
				<div className="right-half">
					<Half dots={plate.right}></Half>
				</div>
			</div>
		);
	}
	return (
		<div className="plate">
			<div className="left-half">
				<Half dots={plate.left}></Half>
			</div>
			<div className="right-half">
				<Half dots={plate.right}></Half>
			</div>
		</div>
	);
}

export default Plate;
