import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import Nav from "./components/Nav";
import bugsContext from "./utilities/bugsContext";

function App() {
	const [bugs, setBugs] = useState(null);
	const [updated, setUpdated] = useState(false);

	return (
		<div className="App">
			<div>
				<h1>
					<FontAwesomeIcon icon={faBug} size={"1x"} color={"red"} /> Bug Tracker
				</h1>
			</div>
			<bugsContext.Provider value={{ bugs, setBugs, updated, setUpdated }}>
				<Nav />
				<Main bugs={bugs} setBugs={setBugs} />
			</bugsContext.Provider>
		</div>
	);
}

export default App;
