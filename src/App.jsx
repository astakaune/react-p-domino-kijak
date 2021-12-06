import "./css/App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Bag from "./components/Bag";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Header from "./components/Header";

function App() {
	const [plates, setPlates] = useState([]);
	const [updated, setUpdated] = useState(Date.now());
	const [showEdit, setShowEdit] = useState({});
	const [platesMaster, setPlatesMaster] = useState([]);

	////////SORTS and FILTERS///////
	const clientSort = (plates) => {
		setPlates(plates);
	};
	const clientFilter = (plates) => {
		setPlates(plates);
	};
	const serverSort = (sort) => {
		axios.get("http://localhost:3003/dominos/sort/" + sort).then((res) => {
			savePlates(res.data.dominos.map((p) => ({ id: p.id, left: p.left_side, right: p.right_side })));
		});
	};
	const serverFilter = (filter) => {
		axios.get("http://localhost:3003/dominos/filter/" + filter).then((res) => {
			setPlates(res.data.dominos.map((p) => ({ id: p.id, left: p.left_side, right: p.right_side })));
		});
	};

	///////////MOdal////////////////
	const hideModal = () => {
		setShowEdit({});
	};
	const showModal = (plate) => {
		setShowEdit(plate);
	};

	///////////CRUD////////////////
	const createPlate = (plate) => {
		axios.post("http://localhost:3003/dominos/add", plate).then((res) => {
			setUpdated(Date.now());
			//
		});
	};
	const editPlate = (plate) => {
		hideModal();
		axios.put("http://localhost:3003/dominos/update/" + plate.id, plate).then((res) => {
			setUpdated(Date.now());
			//
		});
	};
	const removePlate = (plate) => {
		hideModal();
		axios.delete("http://localhost:3003/dominos/delete/" + plate.id).then((res) => {
			setUpdated(Date.now());
			//
		});
	};
	useEffect(() => {
		axios.get("http://localhost:3003/dominos").then((res) => {
			savePlates(res.data.dominos.map((p) => ({ id: p.id, left: p.left_side, right: p.right_side })));
		});
	}, [updated]);
	const savePlates = (plates) => {
		setPlates(plates);
		setPlatesMaster(plates);
	};

	//////////////// SQL ////////////////////////////
// 	const con = mysql.createConnection({
// 		host: "localhost",
// 		user: "root",
// 		password: "",
// 		database: "domino"
// 	});
	
// 	con.connect(function(err) {
// 		if (err) throw err;
// 		console.log("Connected!");
// 	});
	
// app.post('/dominos/add', (req, res) => {
//     const sql = `
//         INSERT INTO
//         dices
//         (left_side, right_side)
//         VALUES (?, ?)
//     `;
//     con.query(sql, [req.body.left, req.body.right], err => {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
//     res.json({
//         msg: 'OK',
//     })
// });

// // UPDATE table_name
// // SET column1 = value1, column2 = value2, ...
// // WHERE condition;
// app.put('/dominos/update/:id', (req, res) => {
//     const sql = `
//         UPDATE dices
//         SET left_side = ?, right_side = ?
//         WHERE id = ?
//     `;
//     con.query(sql, [req.body.left, req.body.right, req.params.id], err => {
//         if (err) throw err;
//         console.log("1 record updated");
//     });
//     res.json({
//         msg: 'OK',
//     })

// });

// // DELETE FROM table_name WHERE condition;
// app.delete('/dominos/delete/:id', (req, res) => {
//     const sql = `
//         DELETE FROM dices
//         WHERE id = ?
//     `;
//     con.query(sql, [req.params.id], err => {
//         if (err) throw err;
//         console.log("1 record deleted");
//     });
//     res.json({
//         msg: 'OK',
//     })
// });

// // SELECT column1, column2, ...
// // FROM table_name
// // ORDER BY column1, column2, ... ASC|DESC;

// app.get('/dominos/sort/:sort', (req, res) => {
//     let sql = `
//         SELECT * 
//         FROM dices
//     `;
//     let orderSQL = '';
//     switch (req.params.sort) {
//         case 'LA':
//             orderSQL = 'ORDER BY left_side ASC';
//             break;
//         case 'LD':
//             orderSQL = 'ORDER BY left_side DESC';
//             break;
//         case 'RA':
//             orderSQL = 'ORDER BY right_side ASC';
//             break;
//         case 'RD':
//             orderSQL = 'ORDER BY right_side DESC';
//             break;
//         case 'BA':
//             orderSQL = 'ORDER BY (left_side + right_side) ASC';
//             break;
//         case 'BD':
//             orderSQL = 'ORDER BY (left_side + right_side) DESC';
//             break;
//         default:
//     }
//     sql += orderSQL;
//     con.query(sql, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.json({
//             msg: 'OK',
//             dominos: result
//         })
//     })
// })

// app.get('/dominos/filter/:filter', (req, res) => {
//     let sql = `
//         SELECT *
//         FROM dices
//     `;
//     let filterSQL = '';
//     switch (req.params.filter) {
//         case 'SS':
//             filterSQL = 'WHERE left_side = right_side';
//             break;
//         case 'ES':
//             filterSQL = 'WHERE left_side = 0 OR right_side = 0';
//             break;
//         default:
//     }
//     sql += filterSQL;
//     con.query(sql, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.json({
//             msg: 'OK',
//             dominos: result
//         })
//     })

// })


// app.get('/dominos', (req, res) => {
//     const sql = `
//         SELECT * 
//         FROM dices
//     `;
//     con.query(sql, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.json({
//             msg: 'OK',
//             dominos: result
//         })
//     })
// })

	return (
		<div className="App col top domino">
			<div className="domino__wrap">
				<Header clientFilter={clientFilter} serverFilter={serverFilter} clientSort={clientSort} serverSort={serverSort} plates={platesMaster}></Header>
				<Create createPlate={createPlate}></Create>
				<Bag plates={plates} showModal={showModal}></Bag>
				<Edit removePlate={removePlate} showEdit={showEdit} hideModal={hideModal} editPlate={editPlate}></Edit>
			</div>
		</div>
	);
}

export default App;
