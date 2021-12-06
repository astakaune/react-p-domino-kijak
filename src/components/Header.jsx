import Filter from "./Filter";
import Sort from "./Sort";

function Header({ clientSort, clientFilter, serverSort, serverFilter, plates }) {
	return (
		<div className="domino__header">
			<h1>Domino</h1>
			<Sort clientSort={clientSort} serverSort={serverSort} plates={plates}></Sort>
			<Filter clientFilter={clientFilter} serverFilter={serverFilter} plates={plates}></Filter>
		</div>
	);
}

export default Header;
